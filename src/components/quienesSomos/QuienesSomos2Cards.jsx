export default function QuienesSomos2Cards({img,charge,name}){
  return(
    <div className="d-flex flex-wrap p-4 justify-content-center" id="quienes-somos-cards">
      <img src={img} alt="Vector" className="col-10 col-md-5 col-xl-3"/>
      <div className="col-12 col-xl-6 align-self-center">
        <div id="charge">{charge}</div>
        <div id="name">{name}</div>
      </div>
    </div>
  )
}