import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

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
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
        console.log("printing loginData");
        console.log(formData);
    }
    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input required type="email" value={FormData.email} onChange={changeHandler}
                    placeholder="Enter email Address" name="email"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password <sup className="text-pink-200">*</sup>
                </p>
                <input required type={showPassword ? ("text") : ("password")}
                    value={FormData.password} onChange={changeHandler} placeholder="Enter password" name="password"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
                <span onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[30px] cursor:pointer"
                >
                    {showPassword ? (<IoEye fontSize={24} fill="#AFB2BF"/>) : (<IoEyeOff fontSize={24} fill="#AFB2BF"/>)}
                </span>

                <Link to="#">
                <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                Forgot Password
                </p>
                   
                </Link>
            </label>
            <br />
            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">Sign In</button>
        </form>
    );
}

export default LoginForm;