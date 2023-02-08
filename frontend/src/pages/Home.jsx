import { useEffect, useState } from "react";
import KnightCard from "../components/KnightCard";

export default function Home() {
  const [knights, setKnights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/knights")
      .then((res) => res.json())
      .then((data) => setKnights(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {knights.map((knight) => (
        <KnightCard
          key={knight.id}
          knight={knight}
          knights={knights}
          setKnights={setKnights}
        />
      ))}
    </>
  );
}
