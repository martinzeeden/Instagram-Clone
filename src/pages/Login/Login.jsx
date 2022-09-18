import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import FormGroup from '../../components/FormGroup/FormGroup';
import Input from '../../components/Input/Input';
import styles from './Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const login = () => {
        alert("Login")
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <h1>Instagram</h1>
                <FormGroup label="E-Mail">
                    <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup label="Password">
                    <Input value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <Button className={styles.button} label="Log in" onClick={() => login()}/>
            </div>
        </div>
    )
}

export default Login;