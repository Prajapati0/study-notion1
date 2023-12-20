import React from 'react';
import SignupImg from '../assets/signup.png';
import Template from '../components/Template';
function Signup({setIsLoggedIn}) {
  return (
   <div className="bg-richblack-900 flex flex-col h-100">

    <Template
    title="Join the millions learning the skills with StudyNotion for free"
    desc1="Build Skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    image={SignupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
  />
  </div>
  );
}

export default Signup;
