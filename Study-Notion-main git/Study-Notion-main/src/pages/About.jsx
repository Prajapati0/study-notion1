
function About() {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <div className="mb-8">
            <p className="text-lg text-gray-800">
              Welcome to our self-development platform! At Study Notion, we are dedicated to providing high-quality courses to help individuals grow and achieve their full potential.
            </p>
            <p className="text-lg text-gray-800 mt-4">
              Our motto is to empower, inspire, and guide our users on their journey towards personal and professional development.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-800">
            Study Notion was founded in 2023 by Adarsh Prajapati with a vision to create an accessible platform for learning and self-improvement. Our team of experts and educators curate diverse courses tailored to meet the needs of learners worldwide.
          </p>
  
          <h2 className="text-2xl font-bold my-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Aman Yadav</h3>
              <p className="text-gray-700">Co-Founder & CTO</p>
              <p className="mt-2 text-gray-800">Aman is passionate about education and technology, driving our mission to make learning accessible to everyone.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Abhishek Yadav</h3>
              <p className="text-gray-700">Head of Content</p>
              <p className="mt-2 text-gray-800">Abhishek leads our content team, ensuring our courses are engaging and impactful for our users.</p>
            </div>
            {/* Add more team members */}
          </div>
  
          <h2 className="text-2xl font-bold my-4">Our Mission</h2>
          <p className="text-lg text-gray-800">
            At Study Notion, our mission is to empower individuals worldwide through accessible and quality education. We strive to foster personal and professional growth by offering diverse courses taught by industry experts.
          </p>
  
          <h2 className="text-2xl font-bold my-4">Our Values</h2>
          <ul className="list-disc pl-6">
            <li className="text-lg text-gray-800 mb-2">Accessibility: Providing education for all, regardless of background or location.</li>
            <li className="text-lg text-gray-800 mb-2">Excellence: Delivering high-quality content and learning experiences.</li>
            <li className="text-lg text-gray-800 mb-2">Innovation: Embracing new technologies and teaching methodologies.</li>
            <li className="text-lg text-gray-800 mb-2">Community: Fostering a supportive learning environment for our users.</li>
          </ul>
  
          <h2 className="text-2xl font-bold my-4">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-gray-700 italic">"I've taken several courses on Study Notion and each one has been incredibly valuable. Highly recommended!"</p>
              <p className="text-gray-800 mt-2">Nitin Jadaun</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-gray-700 italic">"The instructors are knowledgeable and the platform is user-friendly. Great learning experience!"</p>
              <p className="text-gray-800 mt-2">Nikhil Yadav</p>
            </div>
            {/* Add more testimonials */}
          </div>
        </div>
      </div>
    );
}

export default About;