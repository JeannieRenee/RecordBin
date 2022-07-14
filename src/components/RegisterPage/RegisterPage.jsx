import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className='landing-container'>
      <div className='landing-logo'>
        <img src={require('./logo-white.png')} />
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
