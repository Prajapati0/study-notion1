import Card from './Card';
import React from 'react';
import { useState } from 'react';

const Cards = (props) =>{
  let courses = props.courses;
  let category = props.category;
  const[likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if(category === "All"){
      let allCourses = [];

      Object.values(courses).forEach((array) =>{
        array.forEach((courseData) => {
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else {
      return courses[category];
    }
  }

    return (
      <div className='flex flex-wrap justify-center  gap-4 mb-4'>
      {
        getCourses().map((course) => (
          <Card key={course.id} course = {course} setLikedCourses = {setLikedCourses} likedCourses = {likedCourses}></Card>
         ))
      }
      </div>
    );
 };

 export default Cards;