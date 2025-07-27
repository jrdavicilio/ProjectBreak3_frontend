import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const [clases, setClases] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch('http://localhost:5000/api/clases', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then(setClases)
      .catch(() => setError('Error cargando clases o no autorizado'));
  }, [navigate]);

  if (error) return <p>{error}</p>;

  return (
    <div className="page-container">
      <h1>Administración de las clases</h1>
      <table>
        <thead>
          <tr>
            <th>Estilo</th>
            <th>Profesor</th>
            <th>Horario</th>
            <th>Plazas libres</th>
            <th>Plazas totales</th>
          </tr>
        </thead>
        <tbody>
  {clases.map(c => (
    <tr key={c._id}>
      <td data-label="Estilo"><Link to={`/clase/${c._id}`}>{c.estilo}</Link></td>
      <td data-label="Profesor">{c.profesor}</td>
      <td data-label="Horario">{c.horario}</td>
      <td data-label="Plazas libres">{c.plazasDisponibles}</td>
      <td data-label="Plazas totales">{c.plazasTotales}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default Admin;
