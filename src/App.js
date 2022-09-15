import "./App.css";

// Routing 
import { Routes, Route } from "react-router-dom";

// React Slick Css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import MoviePage from "./pages/Movie.page";
import HomePage from "./pages/Home.page";
import PlayPage from "./pages/play.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
