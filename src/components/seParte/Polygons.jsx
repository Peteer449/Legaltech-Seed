export default function Polygons({number, text}){
  return(
    <div className="polygon-shadow">
      <div className="polygon">
        <div className="polygon-container-text">
          <div className="polygon-number">{number}</div>
          <div className="polygon-text raleway">{text}</div>
        </div>
      </div>
    </div>
  )
}