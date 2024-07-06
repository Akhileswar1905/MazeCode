import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GraphComponent from "./components/GrapgComponent.js";
import EndPage from "./components/EndPage.js";
import SignUp from "./components/Sign-up/Signup.jsx";
import Signin from "./components/Sign-in/Signin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.js"; // Import the ProtectedRoute component
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute element={GraphComponent} />}
          />
          <Route path="/end" element={<ProtectedRoute element={EndPage} />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
