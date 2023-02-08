import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditKnight() {
  const [knight, setKnight] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/knights/${id}`)
      .then((res) => res.json())
      .then((data) => setKnight(data))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = (e) => {
    const key = e.target.name;

    setKnight((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/knights/${knight.id}`, {
      method: "PUT",
      headers: {
        accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(knight),
    })
      .then((res) => {
        if (res.status === 204) {
          navigate("/");
        } else {
          alert("Wrong ID");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {knight && (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleEdit}
            type="text"
            name="name"
            id="name"
            value={knight.name}
          />
          <input
            onChange={handleEdit}
            type="number"
            name="age"
            id="age"
            value={knight.age}
          />
          <input type="submit" value="Modify" />
        </form>
      )}
    </div>
  );
}

export default EditKnight;
