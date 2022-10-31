import React, { useCallback, useRef, useState } from 'react';
import Dialog from '../Dialog/Dialog';
import FormGroup from '../FormGroup/FormGroup';
import styles from './UploadImageDialog.module.css'
import {storage} from '../../lib/firebase'
import { ref, uploadBytes, listAll, getDownloadURL, putString, uploadString } from 'firebase/storage'
import { useContext } from 'react';
import UserContext from '../../context/user';
import { v4 } from 'uuid'
import { useEffect } from 'react';
import { post } from '../../services/firebase';
import Cropper from 'react-easy-crop'
import getCroppedImg from '../../helpers/cropImage';

const UploadImageDialog = ({ onClose }) => {
  const { currentUser } = useContext(UserContext)
  const fileInputRef = useRef(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageDispay, setImageDisplay] = useState(null);
  const captionRef = useRef()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const [imageSrc, setImageSrc] = useState(null)


  const handleOnSelectImage = () => {
    fileInputRef.current.click();
  }

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, [])

  const uploadImage = async () => {
    const croppedImage = await getCroppedImg(
      imageSrc, croppedAreaPixels, 0
    )

    console.log('croppedImage', croppedImage)
    console.log('imageUpload', imageUpload)


    const imageRef = ref(storage, `images/${currentUser.displayName}/${v4()}`);

    uploadString(imageRef, croppedImage, 'base64', {contentType: 'image/jpeg'}).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(url => {
        const photoObj = {
          caption: captionRef.current.value,
          comments: [],
          likes: [],
          dateCreated: Date.now(),
          imageSrc: url,
          photoId: v4(),
          userId: currentUser.uid,
        }

        post(photoObj)
      })
    })
  }

  return (
    <Dialog onClose={onClose}>
      <div className={styles.dialogContent}>
        <h2 className={styles.dialogHeadline}>Upload Image</h2>
        <div className={styles.cropOuter}>
          <div className={styles.cropContainer}>
            {imageSrc && <Cropper
              image={imageSrc}
              crop={crop}
                zoom={zoom}
                aspect={4 / 4}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}/>
            }
          </div>
        </div>
        <button className={styles.uploadButton} onClick={handleOnSelectImage}>Select Image</button>
        <input 
          onChange={async (event) => {
            if(event.target.files && event.target.files.length > 0){
              const file = event.target.files[0];
              let imageDataUrl = await readFile(file);
              setImageSrc(imageDataUrl);
            }

            setImageDisplay(URL.createObjectURL(event.target.files[0]))
            setImageUpload(event.target.files[0])
          }} 
          ref={fileInputRef} 
          style={{ display: 'none' }} type="file"/>
        <div className={styles.spacer}/>
        <FormGroup label="Caption">
          <textarea placeholder='caption ...' className={styles.textarea} ref={captionRef}/>
        </FormGroup>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onClose}>Cancel</button>
          <button className={styles.uploadButton} onClick={uploadImage}>Upload</button>
        </div>
      </div>
    </Dialog>
  );
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}

export default UploadImageDialog;