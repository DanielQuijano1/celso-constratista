
import Carousel from 'react-bootstrap/Carousel';

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

                <div className="zindex1">
                    <Carousel fade indicatorLabels={["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8" ]} > 
                        <Carousel.Item interval={3000} className="imgCarruselServicios">
                            <Carousel.Caption interval={3000} text="plomeria" >
                                <h3 className='tituloServicios'>Plomería</h3>
                                <p className='textoServicios'>Instalación y reparación de sistemas de fontanería.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className="imgCarruselServicios">
                            <Carousel.Caption interval={3000}>
                                <h3 className='tituloServicios'>Durlok</h3>
                                <p className='textoServicios'>Trabajos de tabiquería y cielorrasos en durlock.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className="imgCarruselServicios">
                            <Carousel.Caption interval={3000}>
                                <h3 className='tituloServicios'>Pintura</h3>
                                <p className='textoServicios'>Pintura interior y exterior.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className="imgCarruselServicios">
                            <Carousel.Caption >
                                <h3 className='tituloServicios'>Losas y Viguetas</h3>
                                <p className='textoServicios'>Construcción de losas y viguetas.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className="imgCarruselServicios">
                            <Carousel.Caption >
                                <h3 className='tituloServicios'>Pisos</h3>
                                <p className='textoServicios'>Instalación de pisos de diversos materiales.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className="imgCarruselServicios">
                            <Carousel.Caption >
                                <h3 className='tituloServicios'>Techos</h3>
                                <p className='textoServicios'>Tanto techos de material como de chapa.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className="imgCarruselServicios">
                            <Carousel.Caption >
                                <h3 className='tituloServicios'>Electricidad</h3>
                                <p className='textoServicios'>Instalación y reparación de sistemas eléctricos.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className="imgCarruselServicios">
                            <Carousel.Caption >
                                <h3 className='tituloServicios'>Demolición</h3>
                                <p className='textoServicios'>Servicios de demolición seguros y eficientes.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Servicios;