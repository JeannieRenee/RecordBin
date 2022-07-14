import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import './LandingPage.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 250,
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className="landing-container">
      <div className='landing-logo'>
        <img src={require('./logo-white.png')} className={classes.logo}/>
      </div>
      <div>
          <LoginForm /> 
      </div>
    </div>
  );
}

export default LandingPage;
