import React from 'react';
import hello from '../../assest/hello.gif';
import {Link, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

function Hello() {
    const classes = useStyles();

    return (
        <div className="container-sm">
            <img src={hello} width={400} alt="Hello"/>
            <h2>Hoy queremos compartir una gran noticia</h2>
            <Typography className={classes.root}>
                <Link href="/news">
                    Click para continuar
                </Link>

            </Typography>
        </div>


    );
}

export default Hello;



