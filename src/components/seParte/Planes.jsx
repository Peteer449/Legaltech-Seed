export default function Planes({nivel,web,feed,story,youtube,img}){
  return(
    <div className="planes">
      <div className="planes-nivel">{nivel}</div>
      <div className="raleway planes-text">Web: {web}</div>
      <div className="raleway planes-text">Feed: {feed}</div>
      <div className="raleway planes-text">Story: {story}</div>
      <div className="raleway planes-text">Youtube: {youtube}</div>
      <img src={img} alt="" className="planes-img"/>
    </div>
  )
}