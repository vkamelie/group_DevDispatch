import React from "react";

export default function Courses(props) {
  console.log(props);
  return props.courses.map(course => {
    return (
      <div>
        <h1>{course.name}</h1>
        <h2>{course.description}</h2>
        <h2>{course.cost}</h2>
        {course.locations.map(location => {
          return <h3>{location}</h3>;
        })}
        <h3>{course.type}</h3>
      </div>
    );
  });
}
