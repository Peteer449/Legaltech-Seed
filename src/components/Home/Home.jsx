import "./Home.css"
import HomeCardsPublicaciones from "./HomeCardsPublicaciones"
import HomeCardsEventos from "./HomeCardsEventos"

//CTRL + K + C
//CTRL + K + U


// export default function Home(){
//   return(
//     <div>
//       {/*Seccion de bienvenidos*/}
//       <div className="row-cols-2" id="first-section">
//         <img src={require("../../images/plantaVector.png")} alt="" className="img-fluid float-end col-3" id="img-home" />
//         <h1 className="raleway fw-bold fst-italic col-4 mb-4 mt-5 text-home">¡Bienvenidos a la página web oficial del primer semillero de Derecho y Tecnología de Argentina!</h1>
//         <svg className="col-4 text-home pe-5" width="395" height="20" viewBox="0 0 395 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M1 17.0682C109 -0.931884 258.5 -2.43198 394.5 17.0682" stroke="#3F8CC7" stroke-width="5"/>
//         </svg>
//         <h4 className="col-4 mt-5 text-home">Somos Legal Tech Seed, una asociación civil simple que surge como respuesta a las problemáticas que genera la brecha digital en nuestra sociedad.</h4>
//       </div>

//       {/*Seccion de Novedades*/}
//       <div className="row row-cols-12" id="second-section">
//         <h2 className="col-12 text-center p-5">Novedades</h2>
//         <div className=" col-3 offset-3">
//           <h5>Ultimas publicaciones</h5>
//           <img src={require("../../images/plantaVector.png")} alt="" className="img-fluid"/>
//         </div>
//         <div className=" col-3">
//           <h5>Calendario de eventos</h5>
//           <img src={require("../../images/plantaVector.png")} alt="" className="img-fluid"/>
//         </div>
//       </div>

//       {/*Fondo gris en forma de ola abajo de la segunda seccion*/}
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//         <path fill="#828282" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,256C640,288,800,288,960,261.3C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
//       </svg>

//       <div className="row row-cols-12">
//         <img src={require("../../images/plantaVector.png")} alt="" className="img-fluid col-3 offset-4"/>
//       </div>
      

//       {/*Imagen de la flecha que te lleva arriba de la pagina*/}
//       <a href="#navbar" className="float-end me-5">
//         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACtUlEQVRoge2aTWvUQBzGfyqYFrFYqKugYEEPKuupexPxIi09CCIefPkMovRbWD0oCuK1+AmkKhU9SBVK8azb3cWD9YUtCsUiWLdUDzOBOM7mbf5JRugDD4RNMnl+mZedTAJb8kvbBMsaBk4DJ4HjwGGgBuzS+38AXeA98BZ4BbwEVgUz5FYAXAHmgA3gd0ZvAE+By7qs0jUITAGfUoRN64/AdWCgLIhJoCMIYLoNTBQJEAB3CgQwPYOqeVHtA96UCBF6ETVgiGgUVd1lQ4Ru6QxO2gs0K4QI3QH254UYoJrmFNfMcg3R9z0Ib/puVohJD0L383haiABY8iBwP7dJ+ac55UHYJF9LgghQU4WqgyZ5GaPjbzdALgAHkmg90EHgfNwBc8jeuS4wBjT0tmTZT/pBDJNvKh4HUY+UXxeG6QFDNpBzBUHUjW1JmLM2kFsFQXT7/CZxrWkbyGOBgleAE7q8o8CXmH2fBa73yAbSciw0zV2XrpmmDeSbQ4FxNZF0rEvNrNhA1kuAkIb5KQWSB0ISxgqStWm5QEjBWJtW1hnvmD7PtdNGB4BGxnPfheGjc622jS5Gg/rCL3BbIKjpMhpkXzWxZr5J/rtalW+E4aM18jrj3fBB8+FGdBF7D/AV2FF6nHzqASPAd/i7RlaB51UkyqlnaAj498FqptwsTnoYt/N/etTdGQ1u1sg6ajrvu6aBX0kHBfixTNrPLTKsOE54ENjmTeBMWohQ9zwIbvp2VghQ1bfoQfjQCxgdPItG8KO/dFAvm5w0ivtjsIuXgEOuEKFqVNPMFlAvm0QVvgzdLAniAQW/ex+n2KbWJMcQm1cBaml/WRDgA3CVir6ACIBLqMW9XoqwpnvALHARh6EVZD+qGUJ9VHMKOAYcQXXU3Xr/GmqxoIN61p5HfVSzJphhS97oDyeRG262suK5AAAAAElFTkSuQmCC" alt="Flecha hacia arriba"/>
//       </a>
//     </div>
//   )
// }


/*Segunda version de HOME*/
export default function Home(){
  return(
    <div>
      {/*Seccion de bienvenidos*/}
      <div className="row-cols-2" id="first-section">
        <img src={require("../../images/plantaVector.png")} alt="" className="img-fluid float-end col-3" id="img-home" />
        <h1 className="raleway fw-bold fst-italic col-4 mb-4 mt-5 text-home">¡Bienvenidos a la página web oficial del primer semillero de Derecho y Tecnología de Argentina!</h1>
        <svg className="col-4 text-home pe-5" width="395" height="20" viewBox="0 0 395 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 17.0682C109 -0.931884 258.5 -2.43198 394.5 17.0682" stroke="#3F8CC7" stroke-width="5"/>
        </svg>
        <h4 className="col-4 mt-5 text-home">Somos Legal Tech Seed, una asociación civil simple que surge como respuesta a las problemáticas que genera la brecha digital en nuestra sociedad.</h4>
      </div>

      {/*Seccion de Novedades*/}
      <div className="row row-cols-12">
        <h2 className="col-12 text-center p-5">Novedades</h2>
        <h5 className="text-center">Ultimas publicaciones</h5>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 gap-3 p-5 justify-content-center">
          <HomeCardsPublicaciones/>
        </div>
        <h5 className="text-center">Calendario de eventos</h5>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 gap-3 p-5 justify-content-center">
          <HomeCardsEventos/>
        </div>
      </div>


      <div className="row row-cols-12 mt-5">
        <div className="col-3 offset-3">
        <img src={require("../../images/logologo.png")} className="img-fluid" alt=""/>
        <img src={require("../../images/textologo.png")} className="img-fluid" alt=""/>
        <ul className="nav mt-4 col-9 justify-content-between list-unstyled d-flex flex-wrap">
          <li className="ms-3"><a href="https://www.instagram.com/legaltechseed/" rel='noreferrer' target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
          <li className="ms-3"><a href="https://twitter.com/legaltechseed" rel='noreferrer' target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
          <li className="ms-3"><a href="https://www.facebook.com/people/Legaltech-Seed/100025890133686/" rel='noreferrer' target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
          <li className="ms-3"><a href="mailto:legaltechseed@gmail.com" rel='noreferrer' target="_blank"><i class="fa-solid fa-inbox"></i></a></li>
          <li className="ms-3"><a href="https://www.youtube.com/channel/UCtdyphDjxSIFk5jk5ZRzm7Q" rel='noreferrer' target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
        </ul>
        </div>
        <img src="https://pimmedia.egger.com/l/decor/U732_PM/s/Detail/f/881x513/8803437445150" alt="" className="img-fluid col-3"/>
      </div>
      

      {/*Imagen de la flecha que te lleva arriba de la pagina*/}
      <a href="#navbar" className="float-end me-5">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACtUlEQVRoge2aTWvUQBzGfyqYFrFYqKugYEEPKuupexPxIi09CCIefPkMovRbWD0oCuK1+AmkKhU9SBVK8azb3cWD9YUtCsUiWLdUDzOBOM7mbf5JRugDD4RNMnl+mZedTAJb8kvbBMsaBk4DJ4HjwGGgBuzS+38AXeA98BZ4BbwEVgUz5FYAXAHmgA3gd0ZvAE+By7qs0jUITAGfUoRN64/AdWCgLIhJoCMIYLoNTBQJEAB3CgQwPYOqeVHtA96UCBF6ETVgiGgUVd1lQ4Ru6QxO2gs0K4QI3QH254UYoJrmFNfMcg3R9z0Ib/puVohJD0L383haiABY8iBwP7dJ+ac55UHYJF9LgghQU4WqgyZ5GaPjbzdALgAHkmg90EHgfNwBc8jeuS4wBjT0tmTZT/pBDJNvKh4HUY+UXxeG6QFDNpBzBUHUjW1JmLM2kFsFQXT7/CZxrWkbyGOBgleAE7q8o8CXmH2fBa73yAbSciw0zV2XrpmmDeSbQ4FxNZF0rEvNrNhA1kuAkIb5KQWSB0ISxgqStWm5QEjBWJtW1hnvmD7PtdNGB4BGxnPfheGjc622jS5Gg/rCL3BbIKjpMhpkXzWxZr5J/rtalW+E4aM18jrj3fBB8+FGdBF7D/AV2FF6nHzqASPAd/i7RlaB51UkyqlnaAj498FqptwsTnoYt/N/etTdGQ1u1sg6ajrvu6aBX0kHBfixTNrPLTKsOE54ENjmTeBMWohQ9zwIbvp2VghQ1bfoQfjQCxgdPItG8KO/dFAvm5w0ivtjsIuXgEOuEKFqVNPMFlAvm0QVvgzdLAniAQW/ex+n2KbWJMcQm1cBaml/WRDgA3CVir6ACIBLqMW9XoqwpnvALHARh6EVZD+qGUJ9VHMKOAYcQXXU3Xr/GmqxoIN61p5HfVSzJphhS97oDyeRG262suK5AAAAAElFTkSuQmCC" alt="Flecha hacia arriba"/>
      </a>
    </div>
  )
}