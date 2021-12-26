import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
