import { Container, Navbar } from "react-bootstrap"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductGrid from "./Component/ProductGrid"
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        Flipper
      </Navbar.Brand>
    </Container>
  </Navbar>

  <ProductGrid/>
    </div>
  );
}

export default App;
