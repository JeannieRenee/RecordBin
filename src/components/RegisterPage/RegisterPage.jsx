import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className='container'>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/home');
          }}
        >
          Home
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
