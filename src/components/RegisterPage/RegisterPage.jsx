import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {

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
