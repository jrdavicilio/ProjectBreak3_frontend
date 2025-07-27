import { useEffect, useState } from "react";

const Inscripcion = () => {
  const [clases, setClases] = useState([]);
  const [nombre, setNombre] = useState('');
  const [inscribiendoseIds, setInscribiendoseIds] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [inscritos, setInscritos] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/clases')
      .then(res => res.json())
      .then(data => {
        setClases(data);
        setMensaje('');
      })
      .catch(() => setMensaje('Error al cargar las clases'));
  }, []);

  const calcularColor = (plazas) => {
    if (plazas > 10) return 'verde';
    if (plazas > 3) return 'naranja';
    return 'rojo';
  };

  const handleInscripcion = async (id) => {
    if (!nombre.trim()) {
      setMensaje('Por favor, escribe tu nombre para inscribirte');
      return;
    }
    if (inscritos[id]) {
      setMensaje('Ya estás inscrito en esta clase');
      return;
    }

    setMensaje('');
    setInscribiendoseIds(prev => [...prev, id]);

    try {
      const res = await fetch(`http://localhost:5000/api/clases/${id}/inscribir`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre })
      });
      const data = await res.json();

      if (res.ok) {
        setMensaje('Inscripción exitosa');
        setInscritos(prev => ({ ...prev, [id]: true }));
        if(data.clase) {
          setClases(prev => prev.map(c => c._id === id ? data.clase : c));
        } else {
          setClases(prev => prev.map(c => c._id === id ? { ...c, plazasDisponibles: c.plazasDisponibles - 1 } : c));
        }
      } else {
        setMensaje(data.msg || data.mensaje || 'Error al inscribir');
      }
    } catch {
      setMensaje('Error en la conexión');
    }

    setInscribiendoseIds(prev => prev.filter(cid => cid !== id));
  };

  return (
    <div className="page-container">
      <h1>Inscripción a clases</h1>
      <p>Para inscribirte en las clases, escribe tu nombre y apellidos y selecciona a continuación las clases en las que deseas apuntarte</p>
      <br />
      <input
        id="nombre"
        type="text"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Nombre y apellidos"
      />

      <div className="clases-list">
        {clases.length === 0 && <p>Cargando clases...</p>}
        {clases.map(clase => (
          <div key={clase._id} className={`clase-card ${calcularColor(clase.plazasDisponibles)}`}>
            <h3>{clase.estilo} - {clase.profesor}</h3>
            <p><strong>Horario:</strong> {clase.horario}</p>
            <p><strong>Plazas libres:</strong> {clase.plazasDisponibles} de {clase.plazasTotales}</p>
            <button
              disabled={
                clase.plazasDisponibles <= 0 ||
                inscribiendoseIds.includes(clase._id) ||
                inscritos[clase._id]
              }
              onClick={() => handleInscripcion(clase._id)}
            >
              {inscritos[clase._id] ? 'Inscrito' : (inscribiendoseIds.includes(clase._id) ? 'Inscribiendo...' : 'Inscribirse')}
            </button>
          </div>
        ))}
      </div>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};

export default Inscripcion;

