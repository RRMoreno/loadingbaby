import React from 'react';
import logo from "../../assest/logo.png";
import hmm from "../../assest/hmm.gif";
import sorpresa from "../../assest/sorpresa.png";

import {Link, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    images: {
        marginTop: '4rem'
    },
}));

function Noticia(props) {
    const classes = useStyles();
    return (
        <div className={classes.images + ' container-sm'}>
            <img src={sorpresa} width={400} alt="sorpresa"/>

            <h1>Tenemos 8 semanas!!!!!</h1>
            <img src={logo} width={400} alt="Img"/>
            <div>
                <img src={hmm} width={150} alt=""/>
                <p>Sera????<br/>
                    Creo que deberiamos ir un poco antes, visitemos el mes de Julio, luego de la vacuna de COVID.
                </p>
            </div>
            <Typography className={classes.root}>
                <Link href="/first-trimester">
                    Veamos como fue el 1er Trimestre
                </Link>

            </Typography>
        </div>
    );
}

export default Noticia;