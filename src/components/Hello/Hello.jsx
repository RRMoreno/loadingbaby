import React from 'react';
import hello from '../../assest/hello.gif';
import {Link, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    images: {
        marginTop: '4rem'
    },
}));

function Hello() {
    const classes = useStyles();

    return (
        <div className={classes.images + ' container-sm'}>
            <img src={hello} width={400} alt="Hello" />
            <h2>Hoy queremos compartir una gran noticia</h2>
            <p>Recomendamos deslizar hacia abajo en todas las pantallas.</p>
            <Typography className={classes.root}>
                <Link href="/news">
                    Click para continuar
                </Link>
            </Typography>
        </div>


    );
}

export default Hello;



