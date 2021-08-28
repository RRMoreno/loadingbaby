import React from 'react';
import mimosalbaby from "../../assest/mimosalbaby.png";
import escuchando from "../../assest/escuchando.png";
import dosmeses from "../../assest/dosmeses.png"
import {makeStyles} from "@material-ui/core";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import pure from "../../assest/pure.png";
import sopa from "../../assest/sopa.png";
import primerfoto from "../../assest/primerfoto.png";

const useStyles = makeStyles((theme) => ({
    images: {
        marginTop: '4rem'
    },
}));

function PrimerTrimestre(props) {
    const classes = useStyles();
    return (
        <div className={classes.images + ' container-sm'}>
            <h1>Primer Trimestre</h1>
            <p>
                Dos dias despues de la vacuna comenzaron los malestares, deseos de vomitar y me molestaban mucho
                los
                olores (dicen que luego de la vacuna comienzas a recibir las señales 5G jajaj, no fue el caso
                jajaj).
                Tampoco bajo la regla, otros efectos secundarios de la vacuna?? hmmm no lo creo. <br/>
                Suerte para mi, el deseo de vomitar se quitaba cuando comia cada 2 horas. Mala suerte para Ernesto que
                tenia que correr con los antojos jajaj, pero casi siempre el tio Amazon lo sacaba del apuro con las
                malangas para los pure y las sopas.</p>
                <img src={pure} width={200} alt="Img"/>
                <img src={sopa} width={200} alt="Img"/>
                <p>No fue hasta Agosto que tuvimos la super confirmacion del Ginecologo de un segundo corazoncito latiendo
                dentro
                de
                mama
                    <img src={primerfoto} width={400} alt="Img"/>
                </p>

            <h2>Mimos no le falta desde el primer dia</h2>
            <div>
                <img src={mimosalbaby} width={200} alt="Img"/>
                <img src={escuchando} width={200} alt="Img"/>
            </div>
            <div>
                <h3>
                    Recuerdan esta foto
                    <ArrowDownwardIcon color="action"/>
                </h3>
                <img src={dosmeses} width={400} alt="Img"/>
                <p>Fue seguida de comentarios como "que gordita..." pues claro tenia 8 semanas, llevaba un mes tragando cada 2 horas (btw la cara gordita si es la foto)</p>
            </div>
        </div>
    );
}

export default PrimerTrimestre;