import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/components/Home";
import Header from "./pages/shared/Header/Header";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
