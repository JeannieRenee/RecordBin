import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 250,
  },
}));

function RegisterPage() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className='landing-container'>
      <div className='landing-logo'>
        <img src={require('./logo-white.png')} className={classes.logo}/>
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
