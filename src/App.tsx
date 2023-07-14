import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/components/Home";
import Header from "./pages/shared/Header/Header";
import Popup from "./components/Popup/Popup";
import Test from "./Test/Test";


function App() {
  return (
    <div className="App">
      {/*<Popup />*/}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
