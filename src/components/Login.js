import React from 'react'
import "./Login.css"
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
import login_image from "../doctor.jpg"

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
      <div className="login-image">
        <img src={login_image} alt="" />
      </div>
      <div className="login">
       <p><h2 style={{ color: "white" ,margin:"0",padding:"0"}}>Don't Worry . You are not alone.</h2></p> 
        <p><h2 style={{ color: "#7065E4" ,margin:"0",padding:"0"}}>Click below to Login:</h2></p>
        <div className="login-container">
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
    </div>
  )
}

export default Login