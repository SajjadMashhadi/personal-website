import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
