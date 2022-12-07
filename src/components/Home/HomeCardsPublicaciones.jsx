const cards = [{
  img:"https://static.wixstatic.com/media/d8fc1d_36b35b8187f645f9b820ce678086ccc9~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80,enc_auto/file.jpg",
  cardTitle:"Experiencia hackaton en el CAEII",
  // cardText:"Legaltech Seed se hizo presente en la edición N°XX del Congreso Argentino de Estudiantes de Ingeniería Industrial y carreras afines (CAEII), celebrado del 25 al 28 del mes de agosto del 2022.",
  date:"25 Oct 2022",
  link:"https://www.google.com/"
},
{
  img:"https://static.wixstatic.com/media/d8fc1d_925b74c01a7a439fb96701d8c7cc5af1~mv2.png/v1/fit/w_632%2Ch_348%2Cal_c,enc_auto/file.png",
  cardTitle:"El colapso de un gigante: la caída de FTX",
  // cardText:"La caída de FTX nos deja una enseñanza importantísima para evitar que se repitan situaciones similares a futuro y para evitar los malos manejos corporativos que impactan de forma tan directa en la particulares y empresas.",
  date:"30 Nov 2022",
  link:"https://www.google.com/"
},
{
  img:"https://static.wixstatic.com/media/d8fc1d_c45860632aa441c2b60825e98e93149c~mv2.jpg",
  cardTitle:"Las 20 recomendaciones frente...",
  // cardText:"La Dirección Nacional de Ciberseguridad, dependiente de la Secretaría de Innovación Tecnológica de la Nación, elaboró un documento sobre las modalidades de delitos informáticos detectadas durante la Pandemia provocada por el COVID-19 en Argentina.",
  date:"12 Oct 2022",
  link:"https://www.google.com/"
}]

export default function HomeCardsPublicaciones(){
  const cardsMaped = cards.map(infoCard => {
    return(
      <div className="col">
        <div className="card">
          <img src={infoCard.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text"><small className="text-muted">{infoCard.date}</small></p>
            <h5 className="card-title">{infoCard.cardTitle}</h5>
            {/* <p className="card-text">{infoCard.cardText}</p> */}
            <a href={infoCard.link} target="_blank" class="ms-auto rounded-pill" id="btn-card-home"  rel="noreferrer">Ir a algun lado</a>
          </div>
        </div>
      </div>
    )
  })
  return(
    <>
      {cardsMaped}
    </>
  )
}