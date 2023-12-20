import { useState } from 'react';
import { FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from "react-hot-toast";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  const[readMore, setReadMore] = useState(false);

  const description = readMore ? course.description : `${course.description.substring(0,100)}...`;

  function readMorekHandler(){
    setReadMore(!readMore);
  }

  function clickHandler() {
    if(likedCourses.includes(course.id)){
      // mtlb pehle se liked courses ye pada hua hai to liked courses se isse filter krna hoga

      setLikedCourses((prev) => prev.filter((cid) =>(cid!==course.id)));
      toast.error("Like Removed");
    }
    else{
      // pehle se koi bhi course liked nahi hai 
      if(likedCourses.length===0){
        setLikedCourses([course.id]);
      }
      // pehle se kuch courses liked courses ke array mein hain to esse add karenge ab agla liked course
      else{
        setLikedCourses((prev)=> [...prev, course.id]);
      }

      toast.success("Liked Successfully");
    }
  }

  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80 h-max'>
      <div className='relative'>
        <img src={course.image.url} alt='course'></img>
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-15px] grid place-items-center'>
          <button onClick={clickHandler}>
          {
            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
          }
          </button>
        </div>
      </div>

      <div className='p-4 '>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <div className='mt-2 text-white'>
        {description}
        <span onClick={readMorekHandler} className='text-red-400 cursor-pointer'> 
          {readMore ? `Show less` : `Read More`}
        </span>
        </div>
      </div>
    </div>
  );
};

export default Card;