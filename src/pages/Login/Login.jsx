import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import FormGroup from '../../components/FormGroup/FormGroup';
import Input from '../../components/Input/Input';
import AuthPageContainer from '../../components/AuthPageContainer/AuthPageContainer';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import { useEffect } from 'react';
import TextWithLink from '../../components/TextWithLink/TextWithLink';
import { DASHBOARD, REGISTER } from '../../constants/Routes';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Login = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || email === '';

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate(DASHBOARD);
    } catch (error) {
      setEmail('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <AuthPageContainer>
      <h2>Login</h2>
      <FormGroup label="E-Mail">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup label="Password">
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </FormGroup>
      {error && <ErrorMessage message={error} />}
      <Button
        className={styles.button}
        label="Log in"
        onClick={() => handleLogin()}
        disabled={isInvalid}
      />
      <TextWithLink
        text="Don't have an account?"
        linkText="Sign up"
        link={REGISTER}
      />
    </AuthPageContainer>
  );
};

export default Login;
