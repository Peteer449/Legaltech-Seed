export default function Polygons({number, text, duration}){
  return(
    <div className="polygon-shadow" data-aos="fade-up" data-aos-duration="2000">
      <div className="polygon">
        <div className="polygon-container-text">
          <div className="polygon-number">{number}</div>
          <div className="polygon-text raleway">{text}</div>
        </div>
      </div>
    </div>
  )
}