import useWindowDimensions from "../quienesSomos/useWindowDimensions"
import UltimasPublicacionesCards from "./UltimasPublicacionesCards";

const publicaciones = [
  {
    image:"https://static.wixstatic.com/media/d8fc1d_925b74c01a7a439fb96701d8c7cc5af1~mv2.png/v1/fill/w_579,h_325,fp_0.50_0.50,q_95,enc_auto/d8fc1d_925b74c01a7a439fb96701d8c7cc5af1~mv2.png",
    title:"El colapso de un gigante: la caída de FTX.",
    text:"Antes de comenzar a hablar de lo que pasó con uno de los exchanges de criptomonedas más importantes del mundo, es importante definir algunos conceptos que nos van a servir para entender qué es lo que pasó en el último escándalo cripto del momento.",
    link:"https://legaltechseed.wixsite.com/legaltechseed/post/el-colapso-de-un-gigante-la-ca%C3%ADda-de-ftx",
    active:true
  },
  {
    image:"https://static.wixstatic.com/media/d8fc1d_36b35b8187f645f9b820ce678086ccc9~mv2.jpg/v1/fill/w_578,h_434,fp_0.50_0.50,q_90,enc_auto/d8fc1d_36b35b8187f645f9b820ce678086ccc9~mv2.jpg",
    title:"Experiencia hackaton en el CAEII",
    text:"Legaltech Seed se hizo presente en la edición N°XX del Congreso Argentino de Estudiantes de Ingeniería Industrial y carreras afines (CAEII), celebrado del 25 al 28 del mes de agosto del 2022.",
    link:"https://legaltechseed.wixsite.com/legaltechseed/post/experiencia-hackaton-en-el-caeii",
  },
  {
    image:"https://static.wixstatic.com/media/d8fc1d_c45860632aa441c2b60825e98e93149c~mv2.jpg/v1/fill/w_579,h_414,fp_0.50_0.50,q_90,enc_auto/d8fc1d_c45860632aa441c2b60825e98e93149c~mv2.jpg",
    title:"Las 20 recomendaciones frente a las nuevas modalidades delictivas detectadas durante la pandemia.",
    text:"La Dirección Nacional de Ciberseguridad, dependiente de la Secretaría de Innovación Tecnológica de la Nación, elaboró un documento sobre las modalidades de delitos informáticos detectadas durante la Pandemia provocada por el COVID-19 en Argentina.",
    link:"https://legaltechseed.wixsite.com/legaltechseed/post/las-20-recomendaciones-frente-a-las-nuevas-modalidades-delictivas-detectadas-durante-la-pandemia"
  }
]
export default function UltimasPublicaciones(){
  const { width } = useWindowDimensions();
  if(width < 765){
    return(
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner p-4">
          {publicaciones.map((publicacion,index)=>{
            return <UltimasPublicacionesCards key={index} image={publicacion.image} title={publicacion.title} text={publicacion.text} link={publicacion.link} carousel={true} active={publicacion.active} />
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      )
  }else{
    return(
      <div className="d-flex flex-wrap justify-content-around">
        {publicaciones.map((publicacion,index)=>{
          return <UltimasPublicacionesCards key={index} image={publicacion.image} title={publicacion.title} text={publicacion.text} link={publicacion.link}/>
        })}
      </div>
    )
  }
}