import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import firebase from 'firebase/app';

import { auth } from '../firebase';

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Bem Vindo ao React Chat!</h2>

        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Fazer Login com Google
        </div>
        <br />
        <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Fazer Login com Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
