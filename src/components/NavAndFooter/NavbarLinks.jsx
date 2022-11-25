import { Link,useLocation } from "react-router-dom"
import "./style.css"


//Paginas con sus rutas (active:false es para desabilitar el boton y no te lleve a esa ruta)
const navbarLinks=[
  {
    section:"Inicio",
    active:true,
    link:"/"
  },
  {
    section:"Quienes somos",
    active:true,
    link:"/QuienesSomos"
  },
  {
    section:"Nuestras actividades",
    active:true,
    link:"/NuestrasActividades"
  },
  {
    section:"Contenido",
    active:true,
    link:"/Contenido"
  },
  {
    section:"Se parte",
    active:true,
    link:"/SeParte"
  }
]


export default function NavbarLink(){
  const location = useLocation() //Devuelve la ruta en donde estas parado
  const {pathname}=location
  const linksMaped=navbarLinks.map((links,index)=>{ //Mapeo el array de rutas para devolver un <Link> para cada una
    return(
        <li className="nav-item" key={index}>
          <Link className={`nav-link active overflow-visible ${pathname===links.link?"text-decoration-underline fw-bold":""}`} activeClassName="text-decoration-underline" to={links.link}>{links.section}
          </Link>
        </li>
      )
    }
  )
    return(
      <>
        {linksMaped}
      </>
  )}