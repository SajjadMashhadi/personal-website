import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Contact />} />
            <Route path="/myBackground" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Background>
    </>
  );
}

export default App;
