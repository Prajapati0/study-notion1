import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", country: "india",
        streetAddress: "", city: "", state: "", postalCode: "", comments: false,
        candidates: false, offers: false, pushNotifications: ""
      });
    
      function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prevFormData) => {
          return {
            ...prevFormData, [name]: type === 'checkbox' ? checked : value
          }
        })
      }
    
      function submitHandler(event) {
        event.preventDefault();
        console.log("Finally printing the value of the form data....  ")
        console.log(formData);
      }
      return(
   <div className="bg-richblack-900 flex flex-col h-100">

         <div className="flex flex-col items-center">
        <form onSubmit={submitHandler} className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px]
         mx-auto flex flex-col gap-2 shadow-md">
    
          <div>
            <label htmlFor="firstName" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>First Name</label> <br />
    
            <input type="text" name="firstName" id="firstName" placeholder="Enter your first name"
              value={formData.firstName} onChange={changeHandler} className="outline w-full border border-blue-400 
      rounded-md p-2 mt-2" />
          </div>
    
          <div>
            <label htmlFor="lastName" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>lastName</label> <br />
            <input type="text" name="lastName" id="lastName" placeholder="Enter your last name"
              value={formData.lastName} onChange={changeHandler} className="outline w-full border border-blue-400
             rounded-md p-2 mt-2" />
    
          </div>
    
          <div>
            <label htmlFor="email" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>Email Address</label> <br />
            <input type="email" name="email" id="email" placeholder="Enter your email"
              value={formData.email} onChange={changeHandler} className="outline w-full border border-blue-400
             rounded-md p-2 mt-2" />
          </div>
    
          <div>
            <label htmlFor="country" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>Country</label>
            <select id="country" name="country" value={formData.country} className="outline w-full border border-blue-400
             rounded-md p-2 mt-2">
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="mexico">Mexico</option>
              <option value="germany">Germany</option>
              <option value="France">France</option>
            </select>
          </div>
    
          <div>
            <label htmlFor="streetAddress" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>Street Address</label> <br />
            <input type="text" name="streetAddress" id="streetAddress" placeholder="Enter your street address"
              value={formData.streetAddress} onChange={changeHandler} className="outline w-full border border-blue-400
             rounded-md p-2 mt-2" />
          </div>
    
          <div>
            <label htmlFor="city" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold' >City</label> <br />
            <input type="text" name="city" id="city" placeholder="Enter your city"
              value={formData.city} onChange={changeHandler} className="outline w-full border border-blue-400
             rounded-md p-2 mt-2" />
          </div>
    
          <div>
            <label htmlFor="state" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>State / Province</label> <br />
            <input type="text" name="state" id="state" placeholder="Enter your state"
              value={formData.state} onChange={changeHandler} className="outline w-full border border-blue-400
             rounded-md p-2 mt-2"/>
          </div>
    
          <div>
            <label htmlFor="p ostalCode" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>Postal Code</label> <br />
            <input type="text" name="postalCode" id="postalCode" placeholder="Enter your postal code"
              value={formData.postalCode} onChange={changeHandler} className="outline w-full border border-blue-400
             rounded-md p-2 mt-2" />
          </div>
    
    
          <fieldset className='mb-4'>
            <legend className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>By Email</legend>
            <div className='flex items-start gap-4 mt-2'>
              <div>
                <input type="checkbox" id="comments" name="comments"
                  checked={formData.comments} onChange={changeHandler} />
              </div>
    
              <div>
                <label htmlFor="comments" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>Comments</label>
                <p className='text-sm text-gray-500'>Get notified when someone posts a comment on a posting</p>
              </div>
            </div>
    
            <div className='flex items-start gap-4 mt-2'>
              <div>
                <input type="checkbox" id="candidates" name="candidates"
                  checked={formData.candidates} onChange={changeHandler} />
              </div>
    
              <div>
                <label htmlFor="candidates" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>Candidates</label>
                <p className='text-sm text-gray-500'>Get notified when a candidate raise query for a course</p>
              </div>
            </div>
    
            <div className='flex items-start gap-4 mt-2'>
              <div>
                <input type="checkbox" id="offers" name="offers"
                  checked={formData.offers} onChange={changeHandler} />
              </div>
    
              <div>
                <label htmlFor="offers" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>Courses</label>
                <p className='text-sm text-gray-500'>Get notified when a candidate purchases a course</p>
              </div>
            </div>
    
          </fieldset>
    
          <fieldset className='mb-4'>
            <legend className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'> Push Notifications </legend>
            <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone.</p>
    
            <div className='flex gap-4 items-center mt-2'>
              <input type="radio" id="pushEverything" name="pushNotifications" value="Everything"
                onChange={changeHandler} />
              <label htmlFor="pushEverything" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>Everything</label>
    
            </div>
            <div className='flex gap-4 items-center mt-2'>
              <input type="radio" id="pushEmail" name="pushNotifications" value="Same as email"
                onChange={changeHandler} />
              <label htmlFor="pushEmail" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>Same as email</label>
            </div>
    
            <div className='flex gap-4 items-center mt-2'>
              <input type="radio" id="pushNothing" name="pushNotifications" value="No Push Notification"
                onChange={changeHandler} />
              <label htmlFor="pushNothing" className='text-[0.975rem] text-richblack-5 mb-1 leading-[1.375rem] font-bold'>No Push Notification</label>
            </div>
    
          </fieldset>
    
          <button className='bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600
            transition-all duration-200'>Save</button>
        </form>
      </div>
      </div>
      );
}

export default Contact;