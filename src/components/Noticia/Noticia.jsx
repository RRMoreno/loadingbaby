import React from 'react';
import logo from "../../assest/logo.png";
import hmm from "../../assest/hmm.gif";
import sorpresa from "../../assest/sorpresa.png";

function Noticia(props) {
    return (
        <div className="container-sm">

            <img src={logo} width={400} alt="Img"/>
            <h1>Tenemos 8 semanas!!!!!</h1>
            <div>
                <img src={hmm} width={150} alt=""/>
                <p>Sera????<br/>
                    Creo que deberiamos ir un poco antes, visitemos el mes de Julio, luego de la vacuna de COVID. <br/>
                    Dos dias despues de la vacuna comence con malestares como: deseos de vomitar y me molestaban mucho
                    los
                    olores (dicen que luego de la vacuna comienzas a recibir las señales 5G jajaj, no fue el caso
                    jajaj).
                    Tampoco bajo la regla, otros efectos secundarios de la vacuna?? hmmm no lo creo jajaj.
                </p>

            </div>
            <h2>Felicidades!!!!! Tenemos un positivo!!!</h2>
            <img src={sorpresa} width={400} alt="sorpresa"/>
            <p>Suerte para mi el deseo de vomitar se quitaba cuando comia cada 2 horas. Mala suerte para Ernesto que
                tenia que correr con los antojos jajaj, pero casi siempre el tio Amazon lo sacaba del apuro con las
                malangas para los pure y las sopas. <br/>
            No fue hasta Agosto que tuvimos la super confirmacion del Ginecologo de un corazoncito latiendo dentro de mama</p>




        </div>
    );
}

export default Noticia;