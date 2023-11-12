import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/components/Home";
import Header from "./pages/shared/Header/Header";
import { PopupProvider } from "./context/PopupContext";

function App() {
  return (
    <div className="App">
      <PopupProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PopupProvider>
    </div>
  );
}

export default App;
