import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddKnight() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleAge = (e) => setAge(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/knights", {
      method: "POST",
      headers: {
        accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleName}
        type="text"
        name="name"
        id="name"
        value={name}
      />
      <input
        onChange={handleAge}
        type="number"
        name="age"
        id="age"
        value={age}
      />
      <input type="submit" value="Create" />
    </form>
  );
}

export default AddKnight;
