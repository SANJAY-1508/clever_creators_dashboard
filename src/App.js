import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sidebar/SideBar";
import "../src/components/sidebar/sidebar.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../src/pages/Login";

import { BrowserRouter } from "react-router-dom";
import DashBoard from "./pages/DashBoard";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("session", "true");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("session");
    setLoggedIn(false);
    return <Navigate to="/login" replace />;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          ></Route>
          <Route element={<SideBar onLogout={handleLogout} />}>
            <Route path="/console/dashboard" element={<DashBoard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
