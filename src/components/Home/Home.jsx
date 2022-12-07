import "./Home.css";
import "../../index.css";
import HomeCardsPublicaciones from "./HomeCardsPublicaciones";

/*Segunda version de HOME*/
export default function Home(){
  return(
    <div>
      {/*Seccion de bienvenidos*/}
      <div className="row-cols-2" id="first-section">
        <img src={require("../../images/vectorGrowingBss.png")} alt="" className="img-fluid float-end col-3" id="img-home" />
        <h1 className=" mb-4 mt-5 title-home">¡Bienvenidos a la página web oficial del primer semillero de Derecho y Tecnología de Argentina!</h1>
        <svg className="col-4 text-home pe-5" width="395" height="20" viewBox="0 0 395 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 17.0682C109 -0.931884 258.5 -2.43198 394.5 17.0682" stroke="#3F8CC7" stroke-width="5"/>
        </svg>
        <h4 className="col-4 mt-5 text-home raleway">Somos Legal Tech Seed, una asociación civil simple que surge como respuesta a las problemáticas que genera la brecha digital en nuestra sociedad.</h4>
      </div>

      {/*Seccion de Novedades*/}
      <div className="row row-cols-12">
        <h2 className="col-12 text-center p-5">Novedades</h2>
        <h5 className="text-center">Ultimas publicaciones</h5>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 gap-3 p-5 justify-content-center">
          <HomeCardsPublicaciones/>
        </div>
      </div>

      

      {/*Imagen de la flecha que te lleva arriba de la pagina*/}
      <a href="#navbar" className="float-end me-5">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACtUlEQVRoge2aTWvUQBzGfyqYFrFYqKugYEEPKuupexPxIi09CCIefPkMovRbWD0oCuK1+AmkKhU9SBVK8azb3cWD9YUtCsUiWLdUDzOBOM7mbf5JRugDD4RNMnl+mZedTAJb8kvbBMsaBk4DJ4HjwGGgBuzS+38AXeA98BZ4BbwEVgUz5FYAXAHmgA3gd0ZvAE+By7qs0jUITAGfUoRN64/AdWCgLIhJoCMIYLoNTBQJEAB3CgQwPYOqeVHtA96UCBF6ETVgiGgUVd1lQ4Ru6QxO2gs0K4QI3QH254UYoJrmFNfMcg3R9z0Ib/puVohJD0L383haiABY8iBwP7dJ+ac55UHYJF9LgghQU4WqgyZ5GaPjbzdALgAHkmg90EHgfNwBc8jeuS4wBjT0tmTZT/pBDJNvKh4HUY+UXxeG6QFDNpBzBUHUjW1JmLM2kFsFQXT7/CZxrWkbyGOBgleAE7q8o8CXmH2fBa73yAbSciw0zV2XrpmmDeSbQ4FxNZF0rEvNrNhA1kuAkIb5KQWSB0ISxgqStWm5QEjBWJtW1hnvmD7PtdNGB4BGxnPfheGjc622jS5Gg/rCL3BbIKjpMhpkXzWxZr5J/rtalW+E4aM18jrj3fBB8+FGdBF7D/AV2FF6nHzqASPAd/i7RlaB51UkyqlnaAj498FqptwsTnoYt/N/etTdGQ1u1sg6ajrvu6aBX0kHBfixTNrPLTKsOE54ENjmTeBMWohQ9zwIbvp2VghQ1bfoQfjQCxgdPItG8KO/dFAvm5w0ivtjsIuXgEOuEKFqVNPMFlAvm0QVvgzdLAniAQW/ex+n2KbWJMcQm1cBaml/WRDgA3CVir6ACIBLqMW9XoqwpnvALHARh6EVZD+qGUJ9VHMKOAYcQXXU3Xr/GmqxoIN61p5HfVSzJphhS97oDyeRG262suK5AAAAAElFTkSuQmCC" alt="Flecha hacia arriba"/>
      </a>
    </div>
  )
}