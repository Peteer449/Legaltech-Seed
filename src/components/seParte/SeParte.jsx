import "./seParte.css"
import Polygons from "./Polygons"
import Planes from "./Planes"
export default function SeParte(){
  return(
    <div>
      <div id="intro" className="mb-5">
        <div className="text-light fs-1 fw-bolder text-center" id="intro-text">¡Sumá tu colaboración a este gran proyecto que combina el Derecho y la Tecnología!</div>
      </div>
      <div id="ser-parte"className="title text-center mb-5" >¿Cómo puedo ser parte del Semillero?</div>
      <div className="text raleway text-center">
        Buscamos la participación interdisciplinaria de estudiantes, profesionales, y actores sociales en el análisis, debate y producción de conocimientos. No importa tu profesión/edad/lugar donde residas, sólo tenés que tener ganas de aportar tu semilla.
        <br/>
        <br/>
        Si queres sumarte, te pedimos completes el siguiente <a href="https://docs.google.com/forms/d/1RXbF22A8UiUCG6PobbsGJSN0hYqPJJ_F3BBfmngUnwE/viewform?chromeless=1&edit_requested=true" target="_blank" rel="noreferrer" >formulario</a></div>
      <div id="contribuir" className="title text-light text-center p-3">¿Cómo puedo contribuir?</div>
      <div className="px-2">
        <div className="text raleway">Las asociaciones civiles y ONG, en su mayoría, se financian a través de las actividades y programas que van desempeñando con el fin de administrar y poner al servicio diferentes recursos que permitan acercarlos a su objetivo mayor.</div>
        <br/>
        <div className="text raleway">El estatuto de Legal Tech Seed establece en su artículo número 3:
        “La asociación está capacitada para adquirir bienes y contraer obligaciones. Podrá en consecuencia operar con Instituciones Bancarias, Públicas y privadas. Para la ejecución de sus fines, realizará todas las gestiones y actos conducentes, pudiendo actuar por sí, por representantes o en colaboración con autoridades públicas.”
        </div>
        <br/>
        <div className="text raleway">En función de la necesidad de contar con financiación para concretar los diversos proyectos que surgen desde Legaltech Seed es que se formula la siguiente estructura de financiamiento, sujeta a modificaciones cuando sea necesario:</div>
      </div>
      <div id="polygon-container">
        <Polygons number="1." text="Cuotas sociales"/>
        <Polygons number="2." text="Capacitaciones y Talleres arancelados"/>
        <Polygons number="3." text="Publicidad y patrocinios"/>
        <Polygons number="4." text="Cafecito y donaciones"/>
      </div>
      <div className="px-2">
        <div className="title">1. Cuotas sociales</div>
        <div className="text raleway">A partir del mes de febrero del 2021, Legaltech Seed comenzó a recaudar fondos por medio de cuotas sociales. Estas son contribuciones realizadas por sus miembros activos, no siendo un condicionante para participar y formar parte del semillero que, actualmente, cuenta con 70 Miembros entre activos y adherentes.</div>
      </div>
      <div className="px-2">
        <div className="title">2. Capacitaciones y Talleres arancelados</div>
        <div className="text raleway">
        Esquema de talleres y capacitaciones de formación certificadas. Modelo ofrecido a instituciones y organismos, tanto públicos como privados:
          <ul className="mt-3">
            <li className="text-ul raleway">Proteccion de datos personales</li>
            <li className="text-ul raleway">Blockchain: aplicación y bases. Ámbito público y privado</li>
            <li className="text-ul raleway">Herramientas para el abogado 4.0</li>
            <li className="text-ul raleway">Inteligencia artificial y derecho</li>
            <li className="text-ul raleway">Diseño legal</li>
            <li className="text-ul raleway">Inteligencia artificial y sesgos</li>
            <li className="text-ul raleway">Asesoramiento para emprendedores</li>
          </ul>
        </div>
      </div>
      <div id="aclaracion">
        <div id="aclaracion-container" className=" text text-center text-white p-2">
          Aclaración: Legal Tech Seed continuará desarrollando contenidos y difundiendo conocimientos accesibles y abiertos a todo el público. Estas capacitaciones y talleres arancelados se suman y articulan a la estructura existente del semillero.</div>
        </div>
      <div className="px-2">
        <div className="title">3. Publicidad y patrocinios</div>
        <div className="text raleway">
          Se diagramará una estrategia entre los interesados y el Área de Comunicación para pautar espacios y formatos publicitarios dentro de la plataforma digital de difusión con el que cuenta el semillero (portal web, redes sociales, actividades, eventos, etc.). Además, se cuenta con la posibilidad de promocionar producciones y contenidos específicos como WEBINARS, EVENTOS, PODCASTS, entre otros.
          Esta convocatoria ofrece tres planes diferentes: básico, intermedio y exclusivo. Cada uno acorde a las necesidades y facultades de quienes estén interesados en colaborar a través de este medio. Para conocer el detalle de los planes ofrecidos, favor de comunicarse con Legal Tech Seed. 
        </div>
        <div className="title text-center">Planes</div>
        <div id="planes-container">
          <Planes
            nivel="Básico"
            web="presencia compartida en página de inicio."
            feed="2 apariciones mensuales"
            story="2 apariciones mensuales + 1 presencia permanente en destacadas"
            youtube="no incluye"
            img="https://static.wixstatic.com/media/4ba065_50baad106bd54bfe97dddeebe2ca77a6~mv2.png/v1/fill/w_451,h_165,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PA%20-%20BASICO-02.png"
          />
          <Planes
            nivel="Intermedio"
            web="presencia compartida en página de inicio."
            feed="2 apariciones mensuales"
            story="2 apariciones mensuales + 1 presencia permanente en destacadas"
            youtube="presencia compartida en contenidos audiovisuales"
            img="https://static.wixstatic.com/media/4ba065_326abc0432724ecfa289fa97d590ec11~mv2.png/v1/fill/w_707,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PA%20-%20INTERMEDIO-02.png "
          />
          <Planes
            nivel="Exclusivo"
            web="presencia compartida en página de inicio."
            feed="2 apariciones mensuales"
            story="2 apariciones mensuales + 1 presencia permanente en destacadas"
            youtube="presencia exclusiva en contenidos audiovisuales"
            img="https://static.wixstatic.com/media/4ba065_eb4f60daf47a41ef99b8b4dafb2b2496~mv2.png/v1/fill/w_709,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PA%20-%20EXCLUSIVO-02.png"
          />
        </div>
      </div>
      <div className="mb-5 px-2">
        <div className="title">4. Cafecito y donaciones</div>
        <div className="text raleway">Por último, contamos con la posibilidad de hacer aportes dinerarios directos al semillero a través de la plataforma "Cafecito". En la misma, se podrán hacer depósitos desde valores mínimos y accesibles para todos/as. Solo es necesario tener una cuenta en Mercado Pago. Cualquier monto, por más mínimo que pueda ser, es de gran ayuda y significa un enorme aporte para continuar sumando actividades y contenidos.</div>
        <br/>
        <div className="text">¡Regalanos tu cafecito <a href="https://cafecito.app/legaltechseed" target="_blank" rel="noreferrer" >aquí</a>!</div>
      </div>
    </div>
  )
}