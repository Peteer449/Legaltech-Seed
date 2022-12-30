import "./nuestrasActividades.css";

export default function NuestrasActividades() {
  return (
    <>
      <div id="introduccion">
        <div id="introduccion-container" className="text-white">
          <p id="introduccion-title" className="pt-5 pb-5">
          Introducción
          </p>
          <p id="introduccion-text">
            En el actual contexto digital, asumimos el compromiso de brindar
            mayor acceso a las tecnologías así como a los <br /> conocimientos que nos
            permiten ejercer nuestros derechos en igualdad de condiciones. <br /> A
            continuación, vas a poder ver algunas de las actividades que
            desarrollamos para cumplir nuestra misión.
          </p>
        </div>
      </div>

      <h2 className="h2-actividades">Actividades y objetivos de cada área</h2>

      <div id="proyectos">
        <div id="proyectos-container" className="text-white">
          <p id="proyectos-title" className="pt-5 pb-5">
            Proyectos
          </p>
          <p id="proyectos-text">
            Germinación de proyectos y movimiento de ideas creativas. <br />{" "}
            Nuestras producciones están pensadas para su <br /> presentación
            abierta y de libre acceso para cualquier <br /> usuario de internet.
          </p>
          <p id="proyectos-text" className="pt-4">
            Actividades activas
          </p>
          <ul id="proyectos-list" className="pt-4">
            <li>Proyecto "Informateados"</li>
            <li>Proyecto "informateados LIVE"</li>
            <li>Proyecto "Criptonizate"</li>
          </ul>
        </div>
      </div>

      <div id="investigacion">
        <div id="investigacion-container" className="text-white">
          <p id="investigacion-title" className="pt-5 pb-5">
            Investigación
          </p>
          <p id="investigacion-text">
            Escritura de artículos, papers, ensayos e informes. <br />{" "}
            Comentarios a fallos y proyectos de ley. <br /> Somos un espacio de
            debate sobre comentarios de <br /> actualidad y formación.
          </p>
          <p id="investigacion-text" className="pt-4">
            Proyectos activos
          </p>
          <ul id="investigacion-list" className="pt-4">
            <li>Infopublis</li>
            <li>Club de debates</li>
            <li>Expertos en datos</li>
          </ul>
        </div>
      </div>

      <div id="adultos-mayores">
        <div id="adultos-mayores-container" className="text-white">
          <p id="adultos-mayores-title" className="pt-5 pb-5">
            Adultos Mayores
          </p>
          <p id="adultos-mayores-text">
            Nuestro objetivo es acompañar a las personas que más <br />{" "}
            experimentan la brecha digital.
          </p>
          <p id="adultos-mayores-text" className="pt-4">
            Proyectos activos
          </p>
          <ul id="adultos-mayores-list" className="pt-4">
            <li> "Diccionario Tech para adultos mayores (y no tanto)"</li>
            <li> Talleres de formación</li>
          </ul>
        </div>
      </div>

      <div id="recursos-humanos">
        <div id="recursos-humanos-container" className="text-white">
          <p id="recursos-humanos-title" className="pt-5 pb-5">
            Recursos Humanos
          </p>
          <p id="recursos-humanos-text">
            Recibimiento y acompañamiento de los miembros. <br /> Nuestra misión
            es aumentar el nivel de participación y <br /> distribución de
            actividades de los miembros del semillero.
          </p>
          <p id="recursos-humanos-text" className="pt-4">
            Proyectos activos
          </p>
          <ul id="recursos-humanos-list" className="pt-4">
            <li>Capacitaciones internas</li>
          </ul>
        </div>
      </div>

      <div id="comunicacion">
        <div id="comunicacion-container" className="text-white">
          <p id="comunicacion-title" className="pt-5 pb-5">
            Comunicación
          </p>
          <p id="comunicacion-text">
            Gestión integral de la comunicación. <br /> Nuestra tarea es
            producir contenido relacionado al <br /> Derecho y a la Tecnología,
            y mantener a los usuarios <br /> actualizados de todas las novedades
            del Semillero.
          </p>
          <p id="comunicacion-text" className="pt-4">
            Actividades
          </p>
          <ul id="comunicacion-list" className="pt-4">
            <li>
              Actividades Planificación estratégica de la comunicación integral
            </li>
          </ul>
        </div>
      </div>

      <div id="editorial">
        <div id="editorial-container" className="text-white">
          <p id="editorial-title" className="pt-5 pb-5">
            Editorial
          </p>
          <p id="editorial-text">
            Revisiones editoriales de papers de investigación y <br />{" "}
            publicaciones gráficas. <br /> Somos un soporte técnico y de
            redacción a toda <br /> producción que realizan los miembros del
            semillero.
          </p>
          <p id="editorial-text" className="pt-4">
            Proyectos Activos
          </p>
          <ul id="editorial-list" className="pt-4">
            <li>Podcast Millennials hackeando al Derecho</li>
          </ul>
        </div>
      </div>
    </>
  );
}
