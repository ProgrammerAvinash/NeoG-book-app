import "./App.css";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
