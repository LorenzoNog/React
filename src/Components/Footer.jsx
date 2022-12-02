const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="footerTop">
                <h2 className="followUs">
                    Síguenos en nuestras redes
                </h2>
                <div className="socialMedia">
                    <a href="https://www.facebook.com/PuraVidaMiami" className="link">
                       <i class="fa-brands fa-facebook"></i>  
                    </a>
                    <a href="https://www.instagram.com/puravidamiami/" className="link">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.google.com/maps/place/Pura+Vida+Sunset+Harbor/@25.7954294,-80.2075054,13z/data=!4m10!1m2!2m1!1sPura+Vida!3m6!1s0x88d9b54ac2f5a693:0x54b2d6324b04b45d!8m2!3d25.7954294!4d-80.1415874!15sCglQdXJhIFZpZGFaCyIJcHVyYSB2aWRhkgEWaGVhbHRoX2Zvb2RfcmVzdGF1cmFudOABAA!16s%2Fg%2F11ryt37wzm" className="link">
                        <i class="fa-solid fa-map-pin"></i>
                    </a>
                </div>
            </div>
            <div className="footerBottom">
                <p className="textFooter"> 
                    © Copyright 2022 – Bachi Roastery – Todos los derechos reservados
                </p>
            </div>
        </div>
    )
}
export default Footer;