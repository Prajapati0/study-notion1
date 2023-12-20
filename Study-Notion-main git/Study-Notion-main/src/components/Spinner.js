
// const Spinner = () =>{
//     return (
//       <div>
//          {/* <div className="spinner text-red-500"></div> */}
//          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    
//   </svg>
//          {/* <p className="text-white text-lg font-semibold">Loading...</p> */}
//       </div>
//     );
//  };

import ClipLoader from "react-spinners/ClipLoader";



function Spinner() {

  return (
    <div className="sweet-loading">
     

      <ClipLoader
        color={"blue"}
        loading={true}
        
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
          <p className="text-white text-lg font-semibold">Loading...</p> 

    </div>
  );
}

 export default Spinner;