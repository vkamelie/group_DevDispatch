import React from "react";

export default function Reviews(props) {
  return props.reviews.map(review => {
    return (
      <span>
        <h3>{review.username}</h3>
        <h3>{review.course}</h3>
        <h3>{review.title}</h3>
        <h3>{review.description}</h3>
        <h3>{review.location}</h3>
        <h3>{review.rate}</h3>
      </span>
    );
  });
}
