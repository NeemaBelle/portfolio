import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WebProjects from "./pages/WebProjects";
import Indiefact from "./pages/Indiefact";
import Kara from "./pages/Kara";
import Dalo from "./pages/Dalo";
import Modefash from "./pages/Modefash";
import Bartazar from "./pages/Bartazar";
import FthDaily from "./pages/FthDaily";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web-projects" element={<WebProjects />} />
        <Route path="/case-studies/indiefact" element={<Indiefact />} />
        <Route path="/case-studies/kara" element={<Kara />} />
        <Route path="/case-studies/dalo" element={<Dalo />} />
        <Route path="/case-studies/modefash" element={<Modefash />} />
        <Route path="/case-studies/bartazar" element={<Bartazar />} />
        <Route path="/case-studies/fth-daily" element={<FthDaily />} />
      </Route>
    </Routes>
  );
}
