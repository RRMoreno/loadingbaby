import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {makeStyles} from "@material-ui/core";

function ElevationScroll(props) {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
}
const useStyles = makeStyles(() => ({
    nav: {
        display: "flex",
        justifyContent: 'space-between',
        width: "100%"
    },
}));
export default function ElevateAppBar(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <div className={classes.nav}>
                            <div>
                                <SkipPreviousIcon/>
                                <NavigateBeforeIcon/>
                            </div>
                            <div>
                                <NavigateNextIcon/>
                                <SkipNextIcon/>
                            </div>
                        </div>

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}
