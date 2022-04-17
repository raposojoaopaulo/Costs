import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/company">Empresa</Link></li>
        <li><Link to="/contact">contato</Link></li>
        <li><Link to="/newproject">Novo Projeto</Link></li>
      </div>
      <Container custonClass='min-height'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/newproject" element={<NewProject/>} />
        </Routes>
      </Container>
      <h1>Footer</h1>
    </Router>
  );
}

export default App;
