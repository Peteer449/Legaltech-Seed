export default function Planes({nivel,wix,feed,story,youtube,img}){
  return(
    <div className="planes">
      <div className="planes-nivel">{nivel}</div>
      <div className="raleway planes-text">wix: {wix}</div>
      <div className="raleway planes-text">feed: {feed}</div>
      <div className="raleway planes-text">story: {story}</div>
      <div className="raleway planes-text">youtube: {youtube}</div>
      <img src={img} alt="" className="planes-img"/>
    </div>
  )
}