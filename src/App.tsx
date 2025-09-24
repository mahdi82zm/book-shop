import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Books from "./Books/Books";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import Search from "./pages/Search";

import Auth from "./auth/auth";

function App() {
  const location = useLocation();

  const hideHeaderPath = ["/auth"];
  const shouldShowHeader = !hideHeaderPath.includes(location.pathname);

  return (
    <div className="app-container">
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
        <Route path="/blog" element={<Articles />} />
        <Route path="/search" element={<Search />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;

