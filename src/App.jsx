import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Background from "./components/Background";
import { ThemeProvider } from "./context/useTheme";

function App() {
  return (
    <ThemeProvider>
      <Background>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Contact />} />
            <Route path="/myBackground" element={<About />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Background>
    </ThemeProvider>
  );
}

export default App;
