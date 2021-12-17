import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../comtainers/auth/LoginForm';

const LoginPage = () => {
    return (
        <div>
            <AuthTemplate>
                <LoginForm />
            </AuthTemplate>
        </div>
    );
};

export default LoginPage;