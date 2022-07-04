import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
         <span>  |  </span>
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

export default LoginPage;
