import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import AddKnight from "./pages/AddKnight";
import EditKnight from "./pages/EditKnight";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-knight" element={<AddKnight />} />
        <Route path="/edit-knight/:id" element={<EditKnight />} />
      </Routes>
    </>
  );
}

export default App;
