import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import LoginForm from '../LoginForm/LoginForm';

function LandingPage() {

  const history = useHistory();

  const onCreate = (event) => {
    history.push('/registration');
  };

  return (
    <div className="container">

      <div className="grid">
        <div className="grid-col grid-col_8">
        <img src={require('./logo.png')} />
          <h2>
          An app built around on the Discogs system- giving access to bin diggers on the go.
          </h2>
          <>
            <button className="btn btn_sizeMin" onClick={onCreate}>
              Create Account
            </button>
          </>
        </div>

        <div className="grid-col grid-col_4">
          <LoginForm />
        </div>

      </div>
    </div>
  );
}

export default LandingPage;
