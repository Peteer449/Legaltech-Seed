import style from './style.css'

export default function Footer(){
  return(
  <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
      <img src={require("../../images/textologo.png")} alt=""/>
      </div>
      {/* <span className="text-center">© 2023 Legaltech Seed</span> */}
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a href="https://www.instagram.com/legaltechseed/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        <li className="ms-3"><a href="https://twitter.com/legaltechseed" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
        <li className="ms-3"><a href="https://www.facebook.com/people/Legaltech-Seed/100025890133686/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
        <li className="ms-3"><a href="mailto:legaltechseed@gmail.com" target="_blank"><i class="fa-solid fa-inbox"></i></a></li>
        <li className="ms-3"><a href="https://www.youtube.com/channel/UCtdyphDjxSIFk5jk5ZRzm7Q" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
      </ul>
    </footer>
  </div>
  )
}