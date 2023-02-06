export default function UltimasPublicacionesCards({carousel, active, image, title, text, link}){
return(
  <div className={`ultimas-publicaciones-cards card ${carousel &&"carousel-item w-100"} ${active&&"active"}`}>
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body d-flex flex-wrap">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <span className="d-flex w-100 align-self-end justify-content-center">
        <a href={link} target="_blank" className="btn btn-outline-primary rounded-pill" rel="noreferrer">Ir a la publicacion</a>
      </span>
    </div>
  </div>
)
}