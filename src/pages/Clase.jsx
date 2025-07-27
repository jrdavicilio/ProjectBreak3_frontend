import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Clase = () => {
  const { id } = useParams();
  const [inscritos, setInscritos] = useState([]);
  const [clase, setClase] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchClase = () => {
    setLoading(true);
    fetch(`${backendUrl}/api/clases/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Clase no encontrada');
        return res.json();
      })
      .then(data => {
        setClase(data);
        setInscritos(data.inscritos || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Error al cargar los datos');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchClase();
  }, [id]);

  const handleBorrarAlumno = async (idAlumno) => {
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/clases/${id}/alumnos/${idAlumno}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ''}`,
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        setInscritos(inscritos.filter(a => a._id !== idAlumno));
      } else {
        const errorMsg = await res.text();
        alert('Error al borrar el alumno: ' + errorMsg);
      }
    } catch (error) {
      alert('Error en la conexión: ' + error.message);
    }
    setLoading(false);
  };

  if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;
  if (loading) return <p style={{ padding: '2rem' }}>Cargando...</p>;

  return (
    <div className="page-container">
      <h1>{clase.estilo} - {clase.profesor}</h1>
      <p><strong>Horario:</strong> {clase.horario}</p>
      <h2>Alumnos inscritos</h2>
      {inscritos.length === 0 ? (
        <p>No hay alumnos inscritos aún.</p>
      ) : (
        <ul>
          {inscritos.map(alumno => (
            <li key={alumno._id} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px' }}>
              <span>{alumno.nombre}</span>
              <button 
                onClick={() => handleBorrarAlumno(alumno._id)}
                disabled={loading}
                style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Clase;
