import LinkedinCards from "./LinkedinCards";
const AllLinkedin = [
  {
    id:1,
    name:"Ariadna Luján Martínez",
    description:"Abogada especialista en tecnología. Posgraduada en Inteligencia artificial.  Co fundadora de Legaltech Seed. Ceo de Corpora, startup mendocina.",
    link:"https://www.linkedin.com/in/ariadna-lujan-martinez-7a01731ab/"
  },
  {
    id:2,
    name:"Sol Pino Gonzales",
    description:"Abogada tech. Diplomada en innovación y gestión judicial tecnológica. Líder en educación digital en la Dir. Prov. de Juventudes de Mendoza. Co fundadora de Legaltech Seed. Co fundadora y COO de Corpora.",
    link:"https://www.linkedin.com/in/sol-pino-6969091b0/"
  },
  {
    id:3,
    name:"Aldana Belando Gutiérrez",
    description:"Abogada, Scrum Master certificada y próximamente Project Manager.",
    link:"https://www.linkedin.com/in/aldibelando/"
  },
  {
    id:4,
    name:"Tamara Ochoa",
    description:"Abogada. Protección de Datos Personales en Corpora. Líder de RRHH en Legaltech Seed",
    link:"https://www.linkedin.com/in/tamara-ochoa "
  },
  {
    id:5,
    name:"Lucía Grandinetti",
    description:"Abogada de la Facultad de Derecho de la UBA, orientación en derecho económico/empresarial. Coordinadora de investigación en Legaltech Seed.",
    link:"https://www.linkedin.com/in/lucia-grandinetti/ "
  },
  {
    id:6,
    name:"María Agostina Mur Ramírez",
    description:"Abogada (Derecho Laboral y Derecho Civil). Coordinadora del área de investigación de la Asociación Legal Tech Seed.",
    link:"https://www.linkedin.com/in/agostina-mur-5a783a1aa/ "
  },
  {
    id:7,
    name:"Mariana Sanchez Caparrós",
    description:"Equipo de Editorial de Legaltech Seed. PhD Student (UCA). Mg. en Derecho Administrativo (Univ. Austral). Investigadora (Inteligencia Artificial & Derecho, Blockchain e Innovación en Sector Público).",
    link:"https://www.linkedin.com/in/mariana-sanchez-caparr%C3%B3s/ "
  },
  {
    id:8,
    name:"Rodrigo Sebastian Molina Salinas",
    description:"Equipo de Proyectos de Legaltech Seed. Estudiante de Derecho - Facultad de Derecho UNCuyo.",
    link:"https://www.linkedin.com/in/rodrigomolinasalinas/ "
  },
  {
    id:9,
    name:"Gastón Santiago Muñoz",
    description:"Consultor de S.I. BDO AR. Ciberseguridad. Coordinador de Proyectos de Legaltech Seed. Líder de Áreas Educativas",
    link:"https://www.linkedin.com/in/gaston-mu%C3%B1oz/ "
  },
  {
    id:10,
    name:"Marcelo N Pesce Méndez",
    description:"Legal Desing en Laboral Trends | Coord. de proyectos en Legaltech Seed",
    link:"https://www.linkedin.com/in/marcelopescem%C3%A9ndez/ "
  },
  {
    id:11,
    name:"Paz Bossio",
    description:"Ref. Salud Digital y Legal Tech. Universidad Nacional de Jujuy. Estudio Lexir. Líder de Equipo Gobernanza y Protección de datos en Salud. Coord. Red Estudiantes Cambio Climático de la Argentina. MAyDS. UNQ UNJu.",
    link:"https://www.linkedin.com/in/paz-bossio-468547ab/ "
  },
  {
    id:12,
    name:"María Carolina Foronda",
    description:"",
    link:"https://www.linkedin.com/in/m-carolina-foronda-278bb518/ "
  },
  {
    id:13,
    name:"Josefina López Mallea",
    description:"Licenciada en Comunicación Social con orientación en Comunicación Institucional. Coordinación Comunicación Legaltech Seed",
    link:"https://www.linkedin.com/in/josefina-l%C3%B3pez-61a47317a/ "
  },
  {
    id:14,
    name:"Melina Martinez",
    description:"Digital Creator | Marketing Digital. Coordinación Comunicación Legaltech Seed",
    link:"https://www.linkedin.com/in/melina-martinez-38a1001ba/ "
  },
  {
    id:15,
    name:"Paula Cejas ",
    description:"",
    link:"https://www.linkedin.com/in/paula-cejas-05708bb2/ "
  },
  {
    id:16,
    name:"María Laura Andía	",
    description:"",
    link:"https://www.linkedin.com/in/mar%C3%ADa-laura-and%C3%ADa-34a460b "
  },
  {
    id:17,
    name:"Tomás Agustín Torres",
    description:"",
    link:"https://www.linkedin.com/in/tomas-torres94 "
  },
  {
    id:18,
    name:"Julián Ariel Madrid Moreno",
    description:"",
    link:"https://www.linkedin.com/in/julianmadrid"
  },
  {
    id:19,
    name:"Tamara Rocío Vallavela ",
    description:"",
    link:"https://www.linkedin.com/in/tamara-vallavela/ "
  },
  {
    id:20,
    name:"Emilia Luisa Gómez",
    description:"",
    link:"https://www.linkedin.com/in/emilia-luisa-g%C3%B3mez-25212b183 "
  },
  {
    id:21,
    name:"Maria Evangelina Castro Asencio",
    description:"",
    link:"https://www.linkedin.com/in/evangelina-castro-asencio-b0b35b205/ "
  },
  {
    id:22,
    name:"Belén Rudyk",
    description:"",
    link:"https://www.linkedin.com/in/belen-rudyk-b735b3190/"
  },
  {
    id:23,
    name:"María José Laciar",
    description:"",
    link:"https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-laciar-586b50140/ "
  },
  {
    id:24,
    name:"Maria Milagros Martin Rincon",
    description:"",
    link:"https://www.linkedin.com/in/milagrosmartinrincon/ "
  },
  {
    id:25,
    name:"Noelia Gil",
    description:"",
    link:"https://www.linkedin.com/in/noelia-gil-90112340 "
  },
  {
    id:26,
    name:"Zarina Eladia Ross",
    description:"",
    link:"https://www.linkedin.com/in/zarina-ross-2b3a234a/ "
  },
  {
    id:27,
    name:"Facundo Cabrera",
    description:"",
    link:"https://www.linkedin.com/in/facundo-cabrera-robelin-desrets-514652214/ "
  },
  {
    id:28,
    name:"Valeska Maria Kraus",
    description:"",
    link:"https://www.linkedin.com/in/valeska-kraus-06b97a1a6/ "
  },
  {
    id:29,
    name:"Paula Eugenia Kohan",
    description:"",
    link:"https://www.linkedin.com/in/paula-eugenia-kohan-44286164/ "
  },
  {
    id:30,
    name:"Zulma Carrizo",
    description:"",
    link:"https://www.linkedin.com/in/zulma-carrizo/ "
  },
  {
    id:31,
    name:"Santiago Carlen",
    description:"",
    link:"https://www.linkedin.com/in/santiago-carlen-3ba248206/ "
  },
  {
    id:32,
    name:"Franco Michelesi",
    description:"",
    link:"https://www.linkedin.com/in/francomichelesi/ "
  },
  {
    id:33,
    name:"Maria Sofia Fernandez",
    description:"",
    link:"https://www.linkedin.com/in/maria-sofia-fernandez-04805a208/ "
  },
  {
    id:34,
    name:"Freddy Caraballo Zabala",
    description:"",
    link:"https://www.linkedin.com/in/freddycaraballozabala-84643826/ "
  },
  {
    id:35,
    name:"Naiara Aylén Cioccatto",
    description:"",
    link:"https://www.linkedin.com/in/naiara-cioccatto/ "
  },
  {
    id:36,
    name:"Romina Anahi Guaiquimil",
    description:"",
    link:"https://www.linkedin.com/in/romina-guaiquimil-202aa290/ "
  },
  {
    id:37,
    name:"María Antonella Savina Lo Castro",
    description:"",
    link:"https://www.linkedin.com/in/mar%C3%ADa-antonella-savina-21839a240/ "
  },
  {
    id:38,
    name:"Fernando Agustin Cardellino",
    description:"",
    link:"https://www.linkedin.com/in/fernando-cardellino/ "
  },
  {
    id:39,
    name:"Juan Cruz Lopez Guillermón",
    description:"",
    link:"https://www.linkedin.com/in/juan-cruz-l%C3%B3pez-guillerm%C3%B3n/"
  },
  {
    id:40,
    name:"Martina Belen Elia Vitoloni",
    description:"",
    link:"https://www.linkedin.com/in/martina-e/ "
  },
  {
    id:41,
    name:"Vanesa Leonarda Rodriguez",
    description:"",
    link:"https://www.linkedin.com/in/vanesa-leonarda-r-42b105217/ "
  },
  {
    id:42,
    name:"Antonella Mastrangelo ",
    description:"",
    link:"https://www.linkedin.com/in/antonella-mastrangelo-01a22b135/"
  },
  {
    id:43,
    name:"Pablo Sabadini	",
    description:"",
    link:"https://www.linkedin.com/in/pablo-sabadini/ "
  },
  {
    id:44,
    name:"María Soledad Aguirre Garcia",
    description:"",
    link:"https://www.linkedin.com/in/msol22/ "
  },
  {
    id:45,
    name:"María Celeste Billinger	",
    description:"",
    link:"https://www.linkedin.com/in/mariacelestebillinger/"
  },
  {
    id:46,
    name:"Gaston Zentner	",
    description:"",
    link:"https://www.linkedin.com/in/gastonzentner "
  },
  {
    id:47,
    name:"Ana Maria Basualdo",
    description:"",
    link:"https://www.linkedin.com/in/ana-m-basualdo-ba736939 "
  },
  {
    id:48,
    name:"Desiree Lepori",
    description:"",
    link:"https://www.linkedin.com/in/eugeniadesireelepori/ "
  },
  {
    id:49,
    name:"Alejandra Gregoris",
    description:"",
    link:"https://www.linkedin.com/in/alejandragregoris/"
  },
  {
    id:50,
    name:"Federico Gabriel Rasedo Torrejon",
    description:"",
    link:"	https://www.linkedin.com/in/federico-gabriel-rasedo-torrejon/ "
  },
  {
    id:51,
    name:"Federico Laspada ",
    description:"",
    link:"https://www.linkedin.com/in/federico-laspada-00a5509/ "
  },
  {
    id:52,
    name:"Monica Graciela Brito",
    description:"",
    link:"	https://www.linkedin.com/in/m%C3%B3nica-graciela-brito-7a784090/ "
  },
  {
    id:53,
    name:"Juan Martin Brun ",
    description:"",
    link:"	https://www.linkedin.com/in/juan-mart%C3%ADn-brun-7a8329219/ "
  },
  {
    id:54,
    name:"Ezequiel Leonardo Cufari ",
    description:"",
    link:"https://ar.linkedin.com/in/ezequielcufari "
  },
  {
    id:55,
    name:"Juan Manuel Torres ",
    description:"",
    link:"https://www.linkedin.com/in/juan-torres-1b525b171 "
  },
  {
    id:56,
    name:"Micaela Lioren Monge ",
    description:"",
    link:"https://www.linkedin.com/in/micaelalioren/ "
  }
]

export default function LinkedinContainer(){
  return(
    <>
      {AllLinkedin.map(person=>{
        return(<LinkedinCards name={person.name} description={person.description} link={person.link} key={person.id}/>)
      })}
    </>
  )
}