import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from "./pages/Login"
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Personal_Workspace from "./pages/Personal_Workspace";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Personal_Workspace"
          element={
            <ProtectedRoute>
              <Personal_Workspace />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App