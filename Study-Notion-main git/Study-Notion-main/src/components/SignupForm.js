import React, { useState} from "react";
import { IoEye,IoEyeOff } from "react-icons/io5";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}) {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password!==formData.confirmPassword){
            toast.error("Password does not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');

        const accountData ={
            ...formData
        }

        const finalData ={
            ...accountData, accountType
        }
        console.log("Printing userData");
        console.log(finalData);
    }
    return (
        <div>
            {/* student-Instructor tab */}
            <div className="flex flex-row bg-richblack-800 gap-x-1 my-6 rounded-full max-w-max p-[5px]">
                <button onClick={() => setAccountType("student")}
                 className={`${accountType === "student"
                            ? "bg-richblack-900 text-richblack-5"
                            : "bg-transparent text-richblack-200 "
                        } py-2 px-5 rounded-full transition-all`}
                 >Student</button>
                <button onClick={() => setAccountType("instructor")}
                className={`${accountType === "instructor"
                            ? "bg-richblack-900 text-richblack-5"
                            : "bg-transparent text-richblack-200 "
                        } py-2 px-5 rounded-full transition-all`}
                >Instructor</button>
            </div>

            <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">

                {/* firstName & lastName */}
                <div className="flex flex-row gap-x-4 mt-2">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
                        <input required type="text" name="firstName" onChange={changeHandler}
                            placeholder="Enter your First Name" value={formData.firstName} 
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            />
                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                        <input required type="text" name="lastName" onChange={changeHandler}
                            placeholder="Enter your Last Name" value={formData.lastName} 
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            />
                    </label>
                </div>

                {/* Email Addres */}
                <label className="w-full relative mt-2">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup></p>
                    <input required type="email" name="email" onChange={changeHandler}
                        placeholder="Enter Email Addres" value={formData.email} 
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                </label>

                {/* creatPassword and confirmPassword */}

                <div className="flex flex-row gap-x-4 mt-2">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                        <input required type={showPassword ? ("text") : "password"} name="password" onChange={changeHandler}
                            placeholder="Enter Password" value={formData.password} 
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            />
                        <span onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-[40px] cursor:pointer">
                        {showPassword ? (<IoEye fontSize={24} fill="#AFB2BF" />) : (<IoEyeOff fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
                        <input required type={showConfirmPassword ? ("text") : "password"} name="confirmPassword" onChange={changeHandler}
                            placeholder="Confirm Password" value={formData.confirmPassword} 
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            />
                        <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 top-[40px] cursor:pointer">
                        {showConfirmPassword ? (<IoEye fontSize={24} fill="#AFB2BF"/>) : (<IoEyeOff fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                </div>

                <button  className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3">Create Account</button>
            </form>
        </div>
    );
}

export default SignupForm;