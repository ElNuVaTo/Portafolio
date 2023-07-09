import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
