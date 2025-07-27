const Home = () => {
  return (
    <div className="page-container home">
      <h1 className="home__title">Escuela de baile Carmen Ledesma</h1>

      <p className="home__intro">
        En esta página encontrarás toda la información sobre los estilos urbanos que ofrecemos en nuestra escuela, incluyendo los distintos horarios y los profesores encargados de impartir las clases.
      </p>
      <p className="home__intro">
        Además, podrás inscribirte de forma sencilla en las clases que más te interesen. Si tienes alguna duda, no dudes en ponerte en contacto con nosotros. ¡Te esperamos para bailar juntos!
      </p>

      <section className="home__section home__section--funky">
        <h2 className="home__section-title">Funky</h2>
        <p className="home__section-text">
          El estilo de baile funky, que se originó en la década de 1970 como una fusión de jazz, soul, hip hop y street dance, ha evolucionado a lo largo del tiempo sin perder su esencia llena de energía y diversión.
        </p>
        <p className="home__section-text">
          En nuestra escuela, las clases de funky se imparten con un enfoque comercial, donde los alumnos aprenderán a bailar con las canciones más populares y actuales que escuchan en su día a día, ¡temas que seguro todos conocen y disfrutan!
        </p>

        <div className="home__video-container">
          <iframe
            src="https://www.youtube.com/embed/hDHpaPPrzqA"
            title="Video de Funky"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="home__video"
          ></iframe>
        </div>

        <p className="home__section-subtitle">Actualmente tenemos 2 niveles:</p>
        <ul className="home__levels-list">
          <li className="home__level-item">
            <strong>Inicio</strong>
            <ul>
              <li>Profesora: Irene</li>
              <li>Plazas totales: 20</li>
            </ul>
          </li>
          <li className="home__level-item">
            <strong>Avanzado</strong>
            <ul>
              <li>Profesor: David</li>
              <li>Plazas totales: 20</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="home__section home__section--kpop">
        <h2 className="home__section-title">Kpop</h2>
        <p className="home__section-text">
          Este estilo de baile, originario de Corea del Sur, está muy ligado a la música pop coreana, conocida como K-pop. Se caracteriza por ser muy expresivo, destacando la precisión en cada movimiento y la sincronización perfecta entre los miembros de los grupos al interpretar las coreografías.
        </p>
        <p className="home__section-text">
          En nuestra escuela, nuestro objetivo es enseñar a los alumnos los estribillos de las coreografías más populares, e incluso preparar juntos alguna “dance cover” para que disfruten y aprendan al máximo.
        </p>

        <div className="home__video-container">
          <iframe
            src="https://www.youtube.com/embed/nAYApbc8eOA"
            title="Video de Kpop"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="home__video"
          ></iframe>
        </div>


        <p className="home__section-subtitle">Actualmente tenemos 2 niveles:</p>
        <ul className="home__levels-list">
          <li className="home__level-item">
            <strong>Inicio</strong>
            <ul>
              <li>Profesores: Irene y David</li>
              <li>Plazas totales: 20</li>
            </ul>
          </li>
          <li className="home__level-item">
            <strong>Avanzado</strong>
            <ul>
              <li>Profesores: Irene y David</li>
              <li>Plazas totales: 20</li>
            </ul>
          </li>
        </ul>
      </section>

      <footer className="footer home__footer">
        <p>📍 Ubicación: C. Traviesa, 2, 2ºC 49002, Zamora</p>
        <p>📧 Correo: escueladebailecarmenledesma@gmail.com</p>
        <p>📧 Instagram: @carmenledesma_escuela</p>
        <p>📞 Teléfono: 634 446 484</p>
      </footer>
    </div>
  );
};

export default Home;
