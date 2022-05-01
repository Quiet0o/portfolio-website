import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import ErrorPage from "./components/pages/Error/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
