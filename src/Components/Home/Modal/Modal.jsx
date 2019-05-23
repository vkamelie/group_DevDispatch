import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

export default function Modal(props) {
  const schools = props.schools.map(school => {
    return props.schools.length ? (
      <Link to={`/school/${school.id}/reviews`}>
        <div className="school">
          <h3>{school.name}</h3>
          <h3>{school.rating} stars</h3>
        </div>
      </Link>
    ) : (
      <div className="school">
        <h3>No results</h3>
      </div>
    );
  });
  return props.show && <div className="modal">{schools}</div>;
}
