import Carousel from 'react-bootstrap/Carousel';
import Galeria from './Galeria/Galeria';
import "./../../../App.css"


function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img src='./Imagen de WhatsApp 2024-04-01 a las 00.16.54_5052a77c.jpg' className='imgCarousel' />
                <Carousel.Caption>

                    <Galeria />

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src='./Imagen de WhatsApp 2024-04-01 a las 00.19.10_cccc7f9a.jpg' className='imgCarousel' />
                <Carousel.Caption>

                    <Galeria />

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src='./Imagen de WhatsApp 2024-04-01 a las 00.17.20_2c7b3f92.jpg' className='imgCarousel' />
                <Carousel.Caption>

                    <Galeria />

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;