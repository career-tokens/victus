import React from 'react'
import "./Login.css"
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
const Login = () => {
  const navigate = useNavigate();
  console.log(process.env.REACT_APP_CLIENT_ID)

  const handleGoogleLogin = (e) => {
    console.log(e);
    var decoded = jwt_decode(e.credential);
    console.log(decoded);
    localStorage.setItem("user", decoded.name)
    navigate("/home");
  };

  return (
    <div className="main2">
          <div className="login">
          <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
          </div>
    </div>
  )
}

export default Login