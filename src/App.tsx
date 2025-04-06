import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import StatisticsPage from "./components/pages/StatisticsPage/StatisticsPage";
import TrackPage from "./components/pages/TrackPage/TrackPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
