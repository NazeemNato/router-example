// import required packages
import React from "react";
// using BrowserRouter in this application
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import routes components and common component
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
// common component
import Navbar from "./components/Navbar";
// initialize App component
// instead of setting routes in main.jsx, we will set routes in App.jsx
function App() {
  // inside react Fragment or <>, we can return multiple components
  return (
    <>
      <BrowserRouter>
        {/* Since latest update Shared Components using react-router-dom must use inside BrowserRoutes  */}
        <Navbar />
        <Routes>
          {/* Routes is a component that will render the component that matches the current URL */}
          {/* path in this case is the path of the URL */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// export App component
export default App;
