# Escuela de Baile Carmen Ledesma - Frontend

Este es el proyecto frontend de la aplicación web para la Escuela de Baile Carmen Ledesma. Está construido con React y React Router, y permite a los usuarios consultar información de las clases, inscribirse, y a los profesores administrar las clases mediante un login protegido.

---

## Estructura del proyecto

### Carpeta `components`

- **Navbar.jsx**  
  Componente que muestra la barra de navegación con enlaces a las diferentes rutas.  
  Si el usuario está logueado (según el localStorage `profeLogeado`), se muestra también el enlace a la administración de clases.

---

### Carpeta `pages`

- **Home.jsx**  
  Página principal que presenta la escuela, los estilos de baile (Funky y Kpop), con videos explicativos, niveles disponibles y datos de contacto.

- **Inscripcion.jsx**  
  Permite a los usuarios inscribirse en las clases disponibles.  
  - Muestra todas las clases con plazas disponibles.  
  - El usuario debe ingresar su nombre completo para inscribirse.  
  - Controla que no se pueda inscribir dos veces en la misma clase.  
  - Cambia el color de cada clase según la cantidad de plazas libres (verde, naranja, rojo).

- **Login.jsx**  
  Página de login para profesores.  
  - Permite iniciar sesión con email y contraseña, guardando token y estado en localStorage.  
  - También permite cerrar sesión.  
  - Protege rutas privadas mediante token.

- **Admin.jsx**  
  Página protegida para la administración de las clases.  
  - Muestra una tabla con todas las clases, profesores, horarios y plazas disponibles.  
  - Obtiene datos de la API usando el token guardado.  
  - Redirige al login si no hay token o si no está autorizado.

- **Clase.jsx**  
  Detalle de una clase específica.  
  - Muestra datos de la clase y la lista de alumnos inscritos.  
  - Permite borrar alumnos inscritos (requiere autorización mediante token).  
  - Control de carga y manejo de errores.

---

## Tecnologías usadas

- React  
- React Router  
- Fetch API para llamadas HTTP  
- LocalStorage para autenticación y estado de sesión

---

## Configuración y ejecución

1. Clonar el repositorio.  
2. Instalar dependencias con `npm install`.  
3. Asegurarse de que la API backend está corriendo en `http://localhost:5000`.  
4. Ejecutar la app con `npm start`.  
5. Acceder en el navegador a `http://localhost:3000`.

---

## Notas importantes

- El login de profesores guarda el token JWT en localStorage bajo la clave `"token"` y un flag `"profeLogeado"` para controlar la visibilidad del enlace de administración.  
- Las rutas `/admin` y `/clase/:id` requieren autenticación.  
- La inscripción de alumnos se realiza mediante POST a la API, enviando el nombre completo.  
- La gestión de alumnos inscritos se realiza desde la página de detalle de cada clase, con opción a eliminar.
