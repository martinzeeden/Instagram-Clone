import React from 'react';
import { useEffect, useState } from 'react';
import AuthPageContainer from '../../components/AuthPageContainer/AuthPageContainer';
import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import FormGroup from '../../components/FormGroup/FormGroup';
import Input from '../../components/Input/Input';
import TextWithLink from '../../components/TextWithLink/TextWithLink';
import { LOGIN } from '../../constants/Routes';
import styles from './Register.module.css'

const Register = () => {
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

  const handleRegister = async () => {};

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
          <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
