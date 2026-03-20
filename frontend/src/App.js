import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import News from "./pages/News";
import Schedule from "./pages/Schedule";
import Price from "./pages/Price";
import Statement from "./pages/Statement";
import Consult from "./pages/Consult";
import Politika from "./pages/Politika";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/price" element={<Price />}></Route>
        <Route path="/statement" element={<Statement />}></Route>
        <Route path="/consultation" element={<Consult />}></Route>
        <Route path="/politika_obrabotki" element={<Politika />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
