import React from 'react';
import { useEffect } from 'react';
import AuthPageContainer from '../../components/AuthPageContainer/AuthPageContainer';

const Register = () => {

    useEffect(() => {
        document.title = "Register - Instagram"
    }, [])

    return (
        <AuthPageContainer>
            <h2>Register</h2>
        </AuthPageContainer>
    )
}

export default Register