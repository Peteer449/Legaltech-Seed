export default function QuienesSomos2Cards({charge,name}){
  return(
    <div className="mt-5 mb-5">
      <div className="text-center text-light fw-bold fs-5 p-3" id="charge" data-aos="fade-right" data-aos-once="true" data-aos-duration="1300"
>{charge}</div>
      <div className="text-center" data-aos="fade-left" data-aos-once="true" data-aos-duration="1300">{name}</div>
    </div>
  )
}