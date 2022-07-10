import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

function LoginPage() {
  const history = useHistory();

  return (
    <div className='container'>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
