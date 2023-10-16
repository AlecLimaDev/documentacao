import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./App";
import Navbar from "./components/Navbar/Navbar.module";
import WebSite from "./pages/WebSite/WebSite.module";
import Contact from "./pages/Contact/Contact.module";

function App() {
  return (
    <>
    <Navbar />
      <Container>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<WebSite />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
