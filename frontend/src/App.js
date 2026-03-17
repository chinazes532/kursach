import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import News from "./pages/News";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
