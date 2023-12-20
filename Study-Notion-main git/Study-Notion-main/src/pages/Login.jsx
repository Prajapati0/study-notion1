import React from 'react';
import LoginImg from '../assets/login.png';
import Template from '../components/Template';
function Login({setIsLoggedIn}) {
  return (
   <Template
     title="Welcome Back"
     desc1="Build Skills for today, tomorrow, and beyond."
     desc2="Education to future-proof your career."
     image={LoginImg}
     formtype="login"
     setIsLoggedIn={setIsLoggedIn}
   />
  );
}

export default Login;
