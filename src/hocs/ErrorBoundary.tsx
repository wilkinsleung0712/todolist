import React from "react";
import {ErrorBoundary, FallbackProps} from "react-error-boundary";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from "@material-ui/core";


const ErrorFallback = ({error, resetErrorBoundary}:FallbackProps) => {
    console.log(error)
    return (
        <Dialog
            open={!!error}
            onClose={resetErrorBoundary}
        >
            <DialogTitle id="alert-dialog-title">{"Something went wrong"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {error.message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={resetErrorBoundary} color="primary" autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const WithErrorBoundary: React.FC = ({children}) => {
    return (<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>{children}</ErrorBoundary>)
}

export default WithErrorBoundary
