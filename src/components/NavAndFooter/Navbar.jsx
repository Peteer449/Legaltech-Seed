import NavbarLink from "./NavbarLinks"
import { Link } from "react-router-dom"
export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <div className="container-fluid">
      {/*Las imagenes son del logo(En react se usa require()*/}
      <Link to="/"><img src={require("../../images/logologo.png")} alt=""/></Link>
      <Link to="/"><img src={require("../../images/textologo.png")} alt=""/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
        <ul className="navbar-nav p-3 d-flex justify-content-center text-center">
          {/*NavbarLink devuelve todos los links mapeados para mostrarlos en la pagina */}
          <NavbarLink />
          <form action="https://docs.google.com/forms/d/1RXbF22A8UiUCG6PobbsGJSN0hYqPJJ_F3BBfmngUnwE/viewform?chromeless=1&edit_requested=true" target="_blank">
            <input type="submit" className="btn__contact" value="Contactanos"/>
          </form>
        </ul>
      </div>
    </div>
  </nav>
  )
}