import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('profeLogeado') === 'true';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/inscripcion" className="nav-link">Inscripción</Link>
      {isLoggedIn && (
        <Link to="/admin" className="nav-link">Administración de las clases</Link>
      )}
      <Link to="/login" className="nav-link">Login</Link>
    </nav>
  );
};

export default Navbar;
