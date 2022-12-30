export default function QuienesSomos2Cards({charge,name}){
  return(
    <div className="mt-5 mb-5">
      <div className="text-center text-light fw-bold fs-5 p-3" id="charge">{charge}</div>
      <div className="text-center">{name}</div>
    </div>
  )
}