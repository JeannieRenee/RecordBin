import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import './LandingPage.css';

function LandingPage() {
  const history = useHistory();


  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <div className='landing-logo'>
        <img src={require('./logo-white.png')} />
      </div>
      <div>
          <LoginForm /> 
      </div>
    </div>
  );
}

export default LandingPage;
