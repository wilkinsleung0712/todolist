import React from "react";
import useAPIError from "../hooks/useAPIError";
import {createStyles, makeStyles, Modal, Theme, withStyles} from "@material-ui/core";

const getModalStyle = () => {
    const top = 25;
    const left = 25;

    return {
        top: `${top}%`,
        margin:'auto'
        // left: `${left}%`,
        // transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme=>({
    root: {
            position: 'absolute',
            width: theme.spacing() * 50,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing() * 4,

    },
}));

const APIErrorNotification:React.FC = () => {
    const {error, removeError} = useAPIError()

    const handleSubmit = () => removeError()

    const classes = useStyles()

    return (
        <Modal
            open={!!error}
            data-testid="notification-modal"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        >
            <div style={getModalStyle()} className={classes.root}>
                {error && error.message && <p>{error.message}</p>}
                <button data-testid="notification-submit-button" onClick={handleSubmit}>
                    Ok
                </button>
            </div>
        </Modal>
    )
}

export default APIErrorNotification