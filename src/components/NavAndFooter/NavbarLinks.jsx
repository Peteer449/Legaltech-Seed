import { Link } from "react-router-dom"

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
  const linksMaped=navbarLinks.map((links,index)=>
    <li className="nav-item" key={index}>
      <Link className={links.active?"nav-link active overflow-visible":"nav-link disabled"} to={links.link}>{links.section}
      </Link>
    </li>
  )
    return(
      <>
        {linksMaped}
      </>
  )}