import NavbarLink from "./NavbarLinks"
export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <div className="container-fluid">
      {/*Las imagenes son del logo(En react se usa require()*/}
      <img src={require("../../images/logologo.png")} alt=""/>
      <img src={require("../../images/textologo.png")} alt=""/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
        <ul className="navbar-nav p-3 d-flex justify-content-center text-center">
          {/*NavbarLink devuelve todos los links mapeados para mostrarlos en la pagina */}
          <NavbarLink />
          <button className="btn btn-outline-danger">Contactanos</button>
        </ul>
      </div>
    </div>
  </nav>
  )
}