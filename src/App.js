import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form1 from "./Form1";
import Form2 from "./Form2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form-1" element={<Form1 />} />
        <Route path="/form-2" element={<Form2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
