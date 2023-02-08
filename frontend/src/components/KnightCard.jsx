/* eslint-disable react/prop-types */
import React from "react";

import { Link } from "react-router-dom";

function KnightCard({ knight, knights, setKnights }) {
  const handleDelete = () => {
    fetch(`http://localhost:8000/knights/${knight.id}`, { method: "DELETE" })
      .then((res) => {
        if (res.status === 204) {
          setKnights(
            knights.filter((knightFromList) => knightFromList.id !== knight.id)
          );
        } else {
          alert("Wrong ID");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <p>
        Name : {knight.name} {knight.is_dubbed && "👑"}
      </p>
      <p>Age : {knight.age}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <Link to={`/edit-knight/${knight.id}`}>Edit</Link>
    </div>
  );
}

export default KnightCard;
