import { Container } from "./App";
import Navbar from "./components/Navbar/Navbar.module";
import WebSite from "./pages/WebSite/WebSite.module";

function App() {
  return (
    <>
    <Navbar />
      <Container>
        <WebSite />
      </Container>
    </>
  );
}

export default App;
