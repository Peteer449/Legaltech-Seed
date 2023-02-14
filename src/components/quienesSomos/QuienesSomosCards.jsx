import useWindowDimensions from "./useWindowDimensions";

export default function QuienesSomosCards({
    image,
    orientation,
    section,
    title,
    text,
}) {
    //Consigo el ancho de la pantalla para saber que renderizar
    const { width } = useWindowDimensions();
    //La primera seccion de las cards es distinta a la segunda, hago un if para saber cual renderizar
    if (section === "first") {
        return (
            <div
                data-aos={`${orientation === "L" ? "fade-right" : "fade-left"}`}
                data-aos-once="true"
                data-aos-duration="1300"
                className="pe-1 ps-1 pe-md-5 ps-md-5"
                id="blue-card-container"
            >
                <div
                    className={`${orientation === "L" && "left-img"} bg-light d-flex flex-wrap justify-content-center align-items-center`}
                    id="blue-card-img"
                >
                    <img
                        id="img-inside"
                        alt=""
                        src={image}
                    />
                </div>
                <div className="text-white p-4" id="blue-card">
                    <p
                        className={`${orientation === "L" && "left-text"} pt-5`}
                        id="card-title"
                    >
                        {title}
                    </p>
                    <p
                        className={`${orientation === "L" && "left-text"} pb-3 raleway`}
                        id="card-text"
                    >
                        {text}
                    </p>
                </div>
            </div>
        );
    } else if (section === "second") {
        //si el ancho de la pantalla es de mobile o tablet uso las cards una encima de otra, si es desktop se visualizan en horizontal
        if (width < 1200) {
            return (
                <div
                    data-aos={`${orientation === "L" ? "fade-right" : "fade-left"}`}
                    data-aos-once="true"
                    data-aos-duration="1300"
                    className="pe-1 ps-1 pe-md-5 ps-md-5"
                    id="blue-card-container"
                >
                    <div
                        className={`${orientation === "L" && "left-img"} bg-light`}
                        id="blue-card-img-second"
                    >
                        <img
                            alt=""
                            src={image}
                            id="img-inside-second"
                        />
                    </div>
                    <div className="text-white p-4" id="blue-card-second">
                        <p
                            className={`${orientation === "L" && "left-text"} pt-5`}
                            id="card-title-second"
                        >
                            {title}
                        </p>
                        <p
                            className={`${orientation === "L" && "left-text"} pb-3 raleway`}
                            id="card-text-second"
                        >
                            {text}
                        </p>
                    </div>
                </div>
            );
        } else {
            return (
                <div
                    data-aos="flip-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1200"
                    id="blue-card-second-large-container"
                >
                    <div id="blue-card-second-large-div" className="text-white">
                        <div className="bg-light d-flex flex-wrap justify-content-center align-items-center" id="blue-card-second-large-img">
                            <img
                                alt=""
                                src={image}
                                id="img-inside-second"
                            />
                        </div>
                        <p id="card-title-second">{title}</p>
                        <p id="card-text-second">{text}</p>
                    </div>
                </div>
            );
        }
    }
}
