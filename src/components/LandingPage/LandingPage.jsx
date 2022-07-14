import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './LandingPage.css';

function LandingPage() {

  return (
    <div className="landing-container">
      <div className='landing-logo'>
        <img src={require('./logo-white.png')}
          style={{    
          maxWidth: 300,
          paddingTop: 50,
          paddingBottom: 30,
          }}
        />
      </div>
      <div>
          <LoginForm /> 
      </div>
    </div>
  );
}

export default LandingPage;
