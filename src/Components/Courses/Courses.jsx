import React from "react";
import './Checkout.css';

export default function Courses(props) {
  console.log(props);
  return props.courses.map(course => {
    return (
      <div className="course">
        <h1>{course.name}</h1>
        <h3>{course.type}</h3>
        <h4>{course.description}</h4>
        <h2>${course.cost}</h2>
        <div className="locations">
          {course.locations.map(location => {
            return <h3>{location}</h3>;
          })}
        </div>
      </div>
    );
  });
}
