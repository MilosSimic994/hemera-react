import { Route, Routes } from "react-router-dom";
import { Home, MainNavigation, Contact } from './components/export.js';

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
