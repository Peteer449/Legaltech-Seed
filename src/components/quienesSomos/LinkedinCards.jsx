export default function LinkedinCards({name,description,link}){
  return(
    <div className="shadow p-3 bg-body rounded" id="linkedin" data-aos="flip-right" data-aos-once="true" data-aos-duration="1300">
      <p className="fw-bold fs-5 text-center">{name}</p>
      <p className="text-center">{description}</p>
      <a href={link} target="_blank" rel="noreferrer"><img src={require("../../images/LinkedinLogo.png")} alt="" className="mx-auto d-block" height="40px"/></a>
    </div>
  )
}