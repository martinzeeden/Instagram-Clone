import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPageContainer from '../../components/AuthPageContainer/AuthPageContainer';
import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import FormGroup from '../../components/FormGroup/FormGroup';
import Input from '../../components/Input/Input';
import TextWithLink from '../../components/TextWithLink/TextWithLink';
import { DASHBOARD, LOGIN } from '../../constants/Routes';
import FirebaseContext from '../../context/firebase';
import { doesEmailAddressExist, doesUsernameExist } from '../../services/firebase';
import styles from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid =
    username === '' ||
    firstName === '' ||
    lastName === '' ||
    email === '' ||
    password === '';

  useEffect(() => {
    document.title = 'Register - Instagram';
  }, []);

  const handleRegister = async () => {
    const usernameExists = await doesUsernameExist(username);

    if (usernameExists) {
      setError("Username already exists");
      return;
    } 

    const emailAddressExists = await doesEmailAddressExist(email);

    if(emailAddressExists){
      setError("E-Mail is already used");
      return;
    }

    try {
      const createdUserResult = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await createdUserResult.user.updateProfile({
        displayName: username,
      });

      await firebase
        .firestore()
        .collection('users')
        .add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName: firstName + ' ' + lastName,
          emailAddress: email.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        });

      navigate(DASHBOARD);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthPageContainer>
      <h2>Sign up</h2>
      <FormGroup label="Username">
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormGroup>
      <div className={styles.flexContainer}>
        <FormGroup label="First Name">
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup label={'Last Name'}>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
      </div>
      <FormGroup label="E-Mail">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup label="Password">
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      {error && <ErrorMessage message={error} />}
      <Button
        label="Sign up"
        disabled={isInvalid}
        onClick={() => handleRegister()}
      />
      <TextWithLink
        text="Already have an account?"
        linkText="Login"
        link={LOGIN}
      />
    </AuthPageContainer>
  );
};

export default Register;
