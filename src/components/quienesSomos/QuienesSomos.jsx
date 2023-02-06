import QuienesSomosCards from "./QuienesSomosCards"
import "./QuienesSomos.css"

export default function QuienesSomos(){
  return(
    <div>
      {/* Primeras 3 cards de Quienes somos */}
      <QuienesSomosCards 
        orientation="R"
        section="first"
        title="QUIÉNES SOMOS"
        text="Somos el primer semillero de Derecho y Tecnología de Argentina. Nos definimos como un espacio abierto, participativo y transdisciplinario dedicado al desarrollo del diálogo, el debate y la producción de conocimientos ligados a la relación recíproca de dos disciplinas que nos apasionan: el Derecho y la Tecnología."
      />
      <QuienesSomosCards 
        orientation="L"
        section="first"
        title="DE DÓNDE VENIMOS"
        text="Nacimos en el 2019, en la Facultad de Derecho de la UNCuyo (Mendoza). Allí Ariadna Luján Martínez y Sol Pino Gonzales, cofundadoras del semillero, encontraron la manera de dar respuesta a una necesidad concreta y clara: la construcción de un espacio para debatir y compartir conocimientos sobre cómo la Tecnología atraviesa al Derecho y viceversa."
      />
      <QuienesSomosCards 
        orientation="R"
        section="first"
        title="HACIA DÓNDE VAMOS"
        text="Queremos ser un referente tecnológico y académico en LATAM. Buscamos atravesar las fronteras y alcanzar a más personas de distintos países. Llegar a profesionales de diversas ramas, y actores sociales de todos los sectores es nuestro objetivo principal."
      />
      {/* Seccion como lo hacemos */}
      <div id="como-lo-hacemos" >
        <div id="como-lo-hacemos-container" className="text-white">
          <p id="como-lo-hacemos-title" className="pt-5 pb-5">¿CÓMO LO HACEMOS?</p>
          <p id="como-lo-hacemos-text">Con una filosofía basada en que compartir el conocimiento es la manera idónea de crecer, creamos contenidos en múltiples formatos y dirigidos a todas las personas. Nos gusta transmitir las temáticas que abordamos de una manera sencilla y entendible.</p>
          <p id="como-lo-hacemos-text" className="pt-4">
            Hasta el 2022, hemos capacitado de manera gratuita a más de 1200 personas de diversas comunidades. 
          </p>
          <p id="como-lo-hacemos-text" className="pt-4"> 
            Generamos alianzas con múltiples instituciones de varios sectores porque creemos que el trabajo transdisciplinario y compartido es la herramienta para llegar más lejos. Así mismo, organizamos el concurso "Juventudes INN" que reunió proyectos de jóvenes de toda la provincia de Mendoza.
          </p>
        </div>
      </div>
      {/* Segunda seccion con 3 cards */}
      <div id="second-section-cards">
        <QuienesSomosCards
          orientation="L"
          section="second"
          title="NUESTRA MISIÓN"
          text="Buscamos construir puentes entre las personas y el ejercicio de sus derechos digitales, en un contexto donde la tecnología se hace cada vez más presente en todas las esferas de la vida social. Nuestra misión es acortar la brecha digital e informacional que existe actualmente en relación a todos los derechos y obligaciones que de ella surgen."
          />
        <QuienesSomosCards
          orientation="R"
          section="second"
          title="NUESTRA VISIÓN"
          text="Nos posicionamos como herramienta e instrumento de transformación por y para la sociedad y los futuros profesionales. Desde el ámbito académico, queremos alcanzar una construcción colectiva del Derecho Digital."
          />
        <QuienesSomosCards
          orientation="L"
          section="second"
          title="NUESTROS VALORES"
          text="Creatividad, innovación y libertad
          Espacio de aprendizaje colaborativo y comprometido con la sociedad
          Construcción transdisciplinaria y colectiva del conocimiento
          Sencillez a la hora de explicar
          Diversidad y federalismo
          "
          />
        </div>
    </div>
  )
}