//section indica en que parte del documento estan las cards, las primeras 3 tienen un estilo y las segundas 3 otro
export default function QuienesSomosCards ({section,title,text}){
  if(section==="first"){
    return(
      <div className="pe-1 ps-1 pe-md-5 ps-md-5" id="blue-card-container">
        <img className="bg-secondary" id="blue-card-img" alt=""/>
        <div className="text-white p-4" id="blue-card">
          <p className="pt-5" id="card-title">{title}</p>
          <p className="pb-3 raleway" id="card-text">{text}</p>
        </div>
      </div>
      )
  }else if(section==="second"){
    return(
      <div className="pe-1 ps-1" id="blue-card-container">
        <img className="bg-secondary" id="blue-card-img-second" alt="" width={230} height={230}/>
        <div className="text-white p-4" id="blue-card-second">
          <p className="pt-5" id="card-title-second">{title}</p>
          <p className="pb-3 raleway" id="card-text-second">{text}</p>
        </div>
      </div>
    )
  }
}