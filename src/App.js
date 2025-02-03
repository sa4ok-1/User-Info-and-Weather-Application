import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedUsers from "./pages/SavedUsers";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <nav className="flex justify-between p-4 bg-white shadow-md rounded-lg">
          <Link to="/" className="text-xl font-bold">Users</Link>
          <Link to="/saved" className="text-lg">Saved Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<SavedUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
