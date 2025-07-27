import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inscripcion from './pages/Inscripcion';
import Clase from './pages/Clase';
import Admin from './pages/Admin';
import Login from './pages/Login';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscripcion" element={<Inscripcion />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/clase/:id" element={<Clase />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;


