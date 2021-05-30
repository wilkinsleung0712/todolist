import React, {useCallback, useState} from "react";

type ApplicationError = {
    message: string,
    status?: string
}

interface ApplicationErrorContext {
    error: ApplicationError | null,
    addError: (newError: ApplicationError)  => void;
    removeError: ()  => void;
}

export const APIErrorContext = React.createContext({
    error: null,
    addError: () => {},
    removeError: () => {}
} as ApplicationErrorContext)

export const APIErrorContextProvider: React.FC = ({children}) => {

    const [error, setError] = useState<ApplicationError | null>(null);

    const removeError = () => setError(null);

    const addError = ({message, status} : ApplicationError ) => setError({ message, status } );


    const contextValue = {
        error,
        addError: useCallback(({message, status}:ApplicationError) => addError({message, status}), []),
        removeError: useCallback(() => removeError(), [])
    } as ApplicationErrorContext;


    return (
        <APIErrorContext.Provider value={contextValue}>
            {children}
        </APIErrorContext.Provider>
    )
}