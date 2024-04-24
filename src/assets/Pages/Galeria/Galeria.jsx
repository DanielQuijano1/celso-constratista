import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomeGaleria from "./HomeGaleria/HomeGaleria";
import Detalle from "./Detalle/Detalle";
import Error404 from "./Error404/Error404";

function Galeria() {
    return (
        <>
            <div className="containerGaleria">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeGaleria />}/>
                        <Route path="/detalle/:itemid" element={<Detalle />}/>
                        <Route path="*" element={<Error404/> } />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default Galeria;