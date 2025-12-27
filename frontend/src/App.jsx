import React, { useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <div className="container p-8 bg-gray-200  max-w-full" ><p>© Word2PDF 2025 ® - Your PDF Editor</p></div>
    </>
  );
}

export default App;
