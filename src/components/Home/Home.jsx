import "./Home.css"
import UltimasPublicaciones from "./UltimasPublicaciones.jsx"

/*Segunda version de HOME*/
export default function Home(){
  return(
    <div>
      {/*Seccion de bienvenidos*/}
      <div className="d-flex flex-wrap justify-content-center align-items-center" id="first-section">
        <div className="order-md-2 col-12 col-md-7 col-xl-4 text-center">
          <img src={require("../../images/logo_Home.png")} alt="" className="p-5 p-xl-3 img-fluid" id="img-home" />
        </div>
        <div className="col-12 order-md-1 col-md-5 col-lg-4 mb-4 mt-5 p-2 align-self-center ">
          <h1 className="text-light title-home">¡Bienvenidos a la página web oficial del primer semillero de Derecho y Tecnología de Argentina!
          </h1>
          <svg width="395" height="20" viewBox="0 0 395 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 17.0682C109 -0.931884 258.5 -2.43198 394.5 17.0682" stroke="#fff" strokeWidth="5"/>
          </svg>
          <h4 className="col-12 p-2 mt-5 pb-5 text-white raleway title-home-text">Somos Legal Tech Seed, una asociación civil simple que surge como respuesta a las problemáticas que genera la brecha digital en nuestra sociedad.</h4>
        </div>
      </div>

      {/*Seccion de publicaciones*/}
      <p id="publicaciones">Últimas publicaciones</p>
      <UltimasPublicaciones/>
      
      {/* Seccion premios y reconocimientos */}
      <p id="premios-title" className="pt-5">PREMIOS Y RECONOCIMIENTOS</p>
      <div id="premios-y-reconocimientos" className="text-white">
        <div className="d-flex align-items-stretch  flex-wrap justify-content-evenly">
          <div className="d-flex flex-wrap justify-content-center mb-5 mt-5 mt-xl-0 col-xl-3">
            <img src={require("../../images/anotador.png")} alt="Vector de anotador" className="premios-image"/>
            <p id="premios-text" className="pt-4">La participación de los integrantes del semillero, así como su compromiso permanente, nos han ayudado a obtener varios premios y reconocimientos a nivel municipal, provincial y nacional.</p>
          </div>
          <div className="d-flex flex-wrap justify-content-center mb-5 col-xl-3">
            <img src={require("../../images/balanza.png")} alt="Vector de balanza" className="premios-image"/>
            <p id="premios-text" className="pt-4">Participamos en el concurso "Identihack" organizado por el BID y nuestra idea quedó seleccionada entre las mejores. Obtuvimos el reconocimiento de la Municipalidad de Mendoza por nuestra labor, así como también de la Legislatura de la Provincia de Mendoza y de la de Tierra del Fuego.</p>
          </div>
          <div className="d-flex flex-wrap justify-content-center col-xl-3">
            <img src={require("../../images/grafico.png")} alt="Vector de grafico" className="premios-image"/>
            <p id="premios-text" className="pt-4">Fuimos impulsores del proyecto Mendoza - Criptofriendly. Creamos el Seminario de Derecho y Tecnología de la Universidad Nacional de Cuyo, totalmente gratuito y con disertantes de primer nivel. Hoy formamos parte del hub más grande de jóvenes de Iberoamérica: el Hub de emprendedores del IALAB (UBA) - LEGALTECH SEED. </p>
          </div>
        </div>
      </div>
    </div>
  )
}