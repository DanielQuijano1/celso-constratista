import "./../../../App.css"

function Servicios() {
    return (
        <>
            <div className="imgStatic">
                <div className="imgStatic-text">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                    <p>Hacemos posible <br />sus <br />ideas</p>
                </div>
            </div>

            <div className="servicios">
                <h2 className="servicios_title">Nuestros Servicios</h2>
                <p>Ofrecemos una amplia gama de servicios de construcción para satisfacer las necesidades de nuestros clientes. Algunos de nuestros servicios incluyen: </p>

                <div className="servicos_container">
                    <p className="service"> <strong>Plomería</strong> <br/> Instalación y reparación de sistemas de fontanería.</p>
                    <p className="service"> <strong>Durlok</strong> <br/> Trabajos de tabiquería y cielorrasos en durlock.</p>
                    <p className="service"> <strong>Pintura</strong> <br/> Pintura interior y exterior.</p>
                    <p className="service"> <strong>Losas y Viguetas</strong> <br/> Construcción de losas y viguetas.</p>
                    <p className="service"> <strong>Pisos</strong> <br/> Instalación de pisos de diversos materiales.</p>
                    <p className="service"> <strong>Techos</strong> <br/> Tanto techos de material como de chapa.</p>
                    <p className="service"> <strong>Electricidad</strong> <br/> Instalación y reparación de sistemas eléctricos.</p>
                    <p className="service"> <strong>Demolición</strong> <br/> Servicios de demolición seguros y eficientes.</p>
                </div>
            </div>
        </>
    )
}

export default Servicios;