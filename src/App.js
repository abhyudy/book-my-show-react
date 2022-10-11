import "./App.css";
import axios from "axios";

// Routing
import { Routes, Route } from "react-router-dom";

// React Slick Css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import MoviePage from "./pages/Movie.page";
import HomePage from "./pages/Home.page";
import PlayPage from "./pages/play.page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "eacd3ab92a98cc56bf0955ecc8d9333c";
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
