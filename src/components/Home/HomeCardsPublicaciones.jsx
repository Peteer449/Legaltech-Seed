const cards = [{
  img:"https://pimmedia.egger.com/l/decor/U732_PM/s/Detail/f/881x513/8803437445150",
  cardTitle:"Titulo1",
  cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in enim lectus. Quisque bibendum mattis mattis. Donec a tincidunt justo. Fusce tempor purus sagittis nisl pharetra malesuada. Curabitur dapibus suscipit magna in sollicitudin. Vestibulum ac ultricies mauris. Maecenas a elementum ligula, vitae auctor orci.",
  date:"Agosto 2020",
  link:"https://www.google.com/"
},
{
  img:"https://pimmedia.egger.com/l/decor/U732_PM/s/Detail/f/881x513/8803437445150",
  cardTitle:"Titulo1",
  cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in enim lectus. Quisque bibendum mattis mattis. Donec a tincidunt justo. Fusce tempor purus sagittis nisl pharetra malesuada. Curabitur dapibus suscipit magna in sollicitudin. Vestibulum ac ultricies mauris. Maecenas a elementum ligula, vitae auctor orci.",
  date:"Agosto 2020",
  link:"https://www.google.com/"
},
{
  img:"https://pimmedia.egger.com/l/decor/U732_PM/s/Detail/f/881x513/8803437445150",
  cardTitle:"Titulo1",
  cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in enim lectus. Quisque bibendum mattis mattis. Donec a tincidunt justo. Fusce tempor purus sagittis nisl pharetra malesuada. Curabitur dapibus suscipit magna in sollicitudin. Vestibulum ac ultricies mauris. Maecenas a elementum ligula, vitae auctor orci.",
  date:"Agosto 2020",
  link:"https://www.google.com/"
}]

export default function HomeCardsPublicaciones(){
  const cardsMaped = cards.map((infoCard,index) => {
    return(
      <div className="col" key={index}>
        <div className="card">
          <img src={infoCard.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text"><small className="text-muted">{infoCard.date}</small></p>
            <h5 className="card-title">{infoCard.cardTitle}</h5>
            <p className="card-text">{infoCard.cardText}</p>
            <a href={infoCard.link} target="_blank" className="btn btn-outline-primary ms-auto rounded-pill" rel="noreferrer">Ir a algun lado</a>
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