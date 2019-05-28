import React from "react";
import "./review.css";

export default function Reviews(props) {
  return props.reviews.map(review => {
    return (
      <div className="review">
        <h5>{review.username}</h5>
        <div>
          <h3>{review.course}</h3>
          <h3>{review.location}</h3>
        </div>
        <h3>{review.description}</h3>
        <h3>{review.rate}</h3>
      </div>
    );
  });
}
