
import React, { useEffect, useState } from "react";
import Spinner from '../components/Spinner';
import Cards from '../components/Cards';
import Filter from '../components/Filter';
import { filterData, apiUrl } from '../data';
import { toast } from "react-hot-toast";

const Home = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output.data);
    }
    catch (error) {
      toast.error("Network Problem occured");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-bgDark2 ">

      <div className="bg-richblack-900 ">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[100vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>

    </div>
  );
};

export default Home;