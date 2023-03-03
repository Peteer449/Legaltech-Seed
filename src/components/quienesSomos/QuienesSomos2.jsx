import QuienesSomos2Cards from "./QuienesSomos2Cards"
import LinkedinContainer from "./LinkedinContainer"
import "./QuienesSomos2.css"
import coordinacionGeneralVector from "../../images/coordinacion-general-vector-quienes-somos.png"
import proyectosVector from "../../images/proyectos-vector-quienes-somos.png"
import investigacionVector from "../../images/investigacion-vector-quienes-somos.png"
import adultosMayoresVector from "../../images/adultos-mayores-vector-quienes-somos.png"
import recursosVector from "../../images/recursos-humanos-vector-quienes-somos.png"
import comunicacionVector from "../../images/comunicacion-vector-quienes-somos.png"
import editorialVector from "../../images/editorial-vector-quienes-somos.png"



export default function QuienesSomos2(){
  return(
    <div>
      <div id="conoce-al-team">
        <div className="text-light fs-1 fw-bolder text-center" id="conoce-al-team-text">Conoce al team Legal Tech Seed</div>
      </div>
      <div className="fw-bold fs-2 text-center" id="nuestros-circulos">Nuestros circulos</div>
      <QuienesSomos2Cards img={coordinacionGeneralVector} charge="Coordinación general" name="Ariadna - Sol"/>
      <QuienesSomos2Cards img={proyectosVector} charge="Proyectos" name="Marce - Rodri"/>
      <QuienesSomos2Cards img={investigacionVector} charge="Investigación" name="Agostina - Lucia"/>
      <QuienesSomos2Cards img={adultosMayoresVector} charge="Adultos mayores" name="Paz"/>
      <QuienesSomos2Cards img={recursosVector} charge="Recursos humanos" name="Tamara"/>
      <QuienesSomos2Cards img={comunicacionVector} charge="Comunicación" name="Josefina - Melina"/>
      <QuienesSomos2Cards img={editorialVector} charge="Editorial" name="Mariana - Maria Julia - Cecilia"/>
      <div className="fw-bold fs-2 text-center">Nuestros colaboradores</div>
      <div id="linkedin-container">
        <LinkedinContainer/>
      </div>
    </div>
  )
}