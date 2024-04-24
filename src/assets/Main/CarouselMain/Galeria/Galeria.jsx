import { NavLink } from "react-router-dom";
import "./../../../../App.css"

function Galeria(){
    return(
        <>
        
        <button className="galeria_button">
            <NavLink to="/galeria" className="galeria_button_link">
                Ver Proyectos
            </NavLink>
        </button>
        
        </>
    )
}

export default Galeria;