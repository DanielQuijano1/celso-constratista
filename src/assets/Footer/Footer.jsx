import "./../../App.css"

function Footer() {
    return (
        <>

            <div className="box_container_footer">
                
                <div className="marginBottom1em">
                    <h3 className='footer_title'>SOBRE NOSOTROS</h3>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill espaciado1remLeft" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                        Nosotros </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill espaciado1remLeft" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                        Nuestros Servicios </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill espaciado1remLeft" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                        Contactanos </p>
                </div>

                <h3 className='footer_title'>CONTACTO</h3>
                <h2> Celso Torres Contratista</h2>
                <p> GBA sur / C.A.B.A.</p>
                <p><a href="https://wa.me/+5491178310579" target="blank" className="colorBlanco"> Tel.: +54 9 11 7831 0579</a></p>
                <p><a href="mailto:celsodamiansolis@gmail.com" target="blank" className="colorBlanco">Email.: celsodamiansolis@gmail.com</a> </p>

            </div>

            <p className="footer_text_image">Las imágenes son propiedad de Celso Torres Contratista</p>

        </>
    )
}

export default Footer;