import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {

  return (
    <div className='landing-container'>
      <div className='landing-logo'>
        <img src={require('./logo-white.png')} 
          style={{    
            maxWidth: 250,
            paddingTop: 50,
            paddingBottom: 30,
          }}/>
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
