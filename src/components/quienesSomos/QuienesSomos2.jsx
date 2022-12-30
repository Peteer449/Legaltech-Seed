import QuienesSomos2Cards from "./QuienesSomos2Cards"
import LinkedinContainer from "./LinkedinContainer"
import "./QuienesSomos2.css"
export default function QuienesSomos2(){
  return(
    <div>
      <div id="conoce-al-team">
        <div className="text-light fs-1 fw-bolder text-center" id="conoce-al-team-text">Conoce al team Legal Tech Seed</div>
      </div>
      <div className="fw-bold fs-2 text-center" id="nuestros-circulos">Nuestros circulos</div>
      <QuienesSomos2Cards charge="Coordinacion general" name="Ariadna - Sol"/>
      <QuienesSomos2Cards charge="Proyectos" name="Marce - Rodri - Gaston"/>
      <QuienesSomos2Cards charge="Investigacion" name="Agostina - Lucia"/>
      <QuienesSomos2Cards charge="Adultos mayores" name="Paz"/>
      <QuienesSomos2Cards charge="Recursos humanos" name="Ariadna - Sol"/>
      <QuienesSomos2Cards charge="Comunicacion" name="Josefina - Melina"/>
      <QuienesSomos2Cards charge="Editorial" name="Mariana - Maria Julia - Cecilia"/>
      <div className="fw-bold fs-2 text-center">Nuestros colaboradores</div>
      <div id="linkedin-container">
        <LinkedinContainer/>
      </div>
    </div>
  )
}