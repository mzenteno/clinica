import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

import "./App.scss"

export default function App() {
  return (
    <Router basename="clinica">
      <Suspense fallback={<p>loading...</p>}>
        <Routes>          
          <Route exact path="/" element={<Login />}  />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Home"  element={<Layout><Home /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
} 
