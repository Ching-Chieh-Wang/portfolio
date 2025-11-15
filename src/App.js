import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import LeximindDetail from "./components/Projects/detail/leximind/LeximindDetail";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ZwapDetail from "./components/Projects/detail/zwap/ZwapDetail";
import YoutubeCloneDetail from "./components/Projects/youtube-clone/youtubeCloneDetail";

function App() {

  return (
    <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="project">
            <Route path="leximind" element={<LeximindDetail />} />
            <Route path="zwap" element={<ZwapDetail />} />
            <Route path="youtube-clone" element={<YoutubeCloneDetail />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
}

export default App;
