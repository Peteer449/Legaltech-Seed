import "./Contenido.css";
import arrows from "../../images/arrowContenido.png";
import circleRight from "../../images/circleContenido.png";
import circleLeft from "../../images/circleContenidoLeft.png";

const Contenido = () => {
  return (
    <>
      <div id="contenido-introduccion">
        <div id="contenido-introduccion-container" className="text-white">
          <p id="contenido-introduccion-title" className="pt-5 pb-5">
            ¡Descubrí todo el material que producimos y las actividades en las
            que trabajamos!
          </p>
        </div>
      </div>

      {/* Proyectos */}

      <div id="contenido-proyectos">
        <div
          id="contenido-proyectos-container"
          className="text-white d-flex justify-content-between align-items-center"
        >
          <img
            src={circleLeft}
            className="circleLeftPosition img-fluid"
            alt="Vectores"
          />
          <div className="d-flex flex-column align-items-center">
            <p id="contenido-proyectos-title" className="pt-5 pb-5">
              Proyectos
            </p>
            <ul id="contenido-proyectos-list" className="pt-4">
              <li className="contenido-list-title">Proyecto "Informateados"</li>
              <p className="contenido-text">
                Segmento dedicado a la producción y difusión de artículos con
                diferentes análisis de la relación Derecho-Tecnología-Sociedad a
                través de un blog.
              </p>
              <li className="contenido-list-title">
                Proyecto "informateados LIVE"
              </li>
              <p className="contenido-text">
                Es un espacio de difusión de noticias acerca de la tecnología.
                Surgió como una idea del semillero que se vinculó a
                Informateados por su similitud. El ámbito de difusión de IL son
                las redes sociales.
              </p>
              <li className="contenido-list-title">Proyecto "Criptonizate"</li>
            </ul>
          </div>
          <img
            src={arrows}
            className="arrowsRightPosition img-fluid"
            alt="Vectores"
          />
        </div>
      </div>

      {/* Investigacion */}

      <div id="contenido-investigacion">
        <div
          id="contenido-investigacion-container"
          className="text-white d-flex justify-content-between align-items-center"
        >
          <img src={arrows} className="arrowsLeftPosition" alt="Vectores" />
          <div className="d-flex flex-column align-items-center">
            <p id="contenido-investigacion-title" className="pt-5 pb-5">
              Investigación
            </p>
            <ul id="contenido-investigacion-list" className="pt-4">
              <li className="contenido-list-title">Infopublis</li>
              <p className="contenido-text">
                Son producciones destinadas a las redes sociales, cuyo objetivo
                comunicacional principal es educar a los usuarios sobre las
                temáticas legales e informáticas que nos comprometen.
              </p>
              <li className="contenido-list-title">Club de debates</li>
              <p className="contenido-text">
                Encuentro una vez cada dos meses aproximadamente, donde los
                miembros nos juntamos a charlar, pensar y debatir sobre
                temáticas actuales.
              </p>
              <li className="contenido-list-title">Expertos en datos</li>
              <p className="contenido-text">
                Proyecto a largo plazo que analiza toda la normativa de datos
                personales (nacional e internacional). En la primera etapa
                comentamos la Ley de Datos Personales. En la segunda instancia,
                tuvimos una entrevista con gente de la Agencia de Acceso a la
                Información. Y en la tercera, elaboramos un exhaustivo informe
                al cual pueden tener acceso las personas que les interesa la
                temática a través del siguiente{" "}
                <a
                  href="https://drive.google.com/file/d/1TdSyTjB_No1ATEflpTJgFeNN5uhU7ktJ/view"
                  target="_blank"
                  rel="noreferrer"
                  className="black-link"
                >
                  link
                </a>
              </p>
              <li className="contenido-list-title">
                Artículos, ensayos e informes
              </li>
              <p className="contenido-text">
                Muchas de nuestras producciones han sido publicadas en
                diferentes editoriales y han participado en diferentes congresos
                académicos.
              </p>
              <li className="contenido-list-title">
                Taller dictado por Mariana Sánchez Caparrós sobre cómo empezar a
                escribir
              </li>
              <li className="contenido-list-title">
                Comentarios de actualidad
              </li>
            </ul>
          </div>
          <img
            src={circleRight}
            className="circleRightPosition img-fluid"
            alt="Vectores"
          />
        </div>
      </div>

      {/* Adultos Mayores */}

      <div id="contenido-mayores">
        <div
          id="contenido-mayores-container"
          className="text-white d-flex justify-content-between align-items-center"
        >
          <img
            src={circleLeft}
            className="circleLeftPosition img-fluid"
            alt="Vectores"
          />
          <div className="d-flex flex-column align-items-center">
            <p id="contenido-mayores-title" className="pt-5 pb-5">
              Adultos Mayores
            </p>
            <ul id="contenido-mayores-list" className="pt-4">
              <li className="contenido-list-title">
                Diccionario Tech para adultos mayores (y no tanto)"
              </li>
              <p className="contenido-text">
                Diccionario elaborado a raíz de un trabajo colaborativo,
                participativo y dinámico que fuimos construyendo desde Legaltech
                Seed Derecho 4.0, como parte de nuestro aporte de
                Responsabilidad Social hacia los Adultos Mayores en especial.
              </p>
              <p>
                Podés descargarlo{" "}
                <a
                  href="https://drive.google.com/file/d/1dmxPOtJQmYJE6BkJ0FivsNyQE7_TE_bs/view"
                  rel="noreferrer"
                  target="_blank"
                  className="black-link"
                >
                  aquí
                </a>
              </p>
              <p>
                ¿Te gustaría sumar nuevos términos? Hacé click{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdAas-tPm1XItreBzn9uiW35jP_38S2m8-Kw_Y-jbvAg9_-FQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                  className="black-link"
                >
                  aquí
                </a>
              </p>
              <li className="contenido-list-title">Talleres de formación</li>
            </ul>
          </div>
          <img
            src={arrows}
            className="arrowsRightPosition img-fluid"
            alt="Vectores"
          />
        </div>
      </div>

      {/* Editorial */}

      <div id="contenido-editorial">
        <div
          id="contenido-editorial-container"
          className="text-white d-flex justify-content-between align-items-center"
        >
          <img src={arrows} className="arrowsLeftPosition" alt="Vectores" />
          <div className="d-flex flex-column align-items-center">
            <p id="contenido-editorial-title" className="pt-5 pb-5">
              Editorial
            </p>
            <ul id="contenido-editorial-list" className="pt-4">
              <li className="contenido-list-title">
                Podcast Millennials hackeando al Derecho
              </li>
              <p className="contenido-text">
                Es un Congreso virtual organizado por Legaltech Seed dedicado al
                abordaje interdisciplinario de las principales transformaciones y
                sucesos ligados al Derecho y la Tecnología. Articulando la
                participación de los miembros del semillero en sus diferentes
                etapas de desarrollo, el evento es realizado por estudiantes,
                docentes y profesionales comprometidos con el estudio y análisis
                de la 4° Revolución Industrial que transitamos.
              </p>
              <p>
                ¡Escuchalo{" "}
                <a
                  href="https://open.spotify.com/show/7C9qkB1y83GGSaYNu0nqPc"
                  target="_blank"
                  rel="noreferrer"
                  className="black-link"
                >
                  aquí
                </a>{" "}
                !
              </p>
            </ul>
          </div>
          <img
            src={circleRight}
            className="circleRightPosition img-fluid"
            alt="Vectores"
          />
        </div>
      </div>
    </>
  );
};

export default Contenido;
