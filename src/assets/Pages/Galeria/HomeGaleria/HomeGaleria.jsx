import { Link } from "react-router-dom";

function HomeGaleria() {
    return (
        <>
            <div className="flexGaleria">
                <Link to="/bernal-sargento-cabral" className="galeria__link">
                    <img src="./Imagen de WhatsApp 2024-04-19 a las 10.02.25_d7786bee.jpg" alt="sargento cabral" className="imgCardGaleria" />
                    <div className="titleCard">Bernal Sargento Cabral</div>
                </Link>
                
            </div >
        </>
    )
}

export default HomeGaleria;