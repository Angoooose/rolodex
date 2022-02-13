import { createContext, FunctionComponent } from 'react';
import useAuth from '../hooks/useAuth';
import { Auth } from '../Types/AuthData';

const AuthContext = createContext<Auth>({
    authData: undefined,
    signOut: () => null,
    addContact: () => null,
    updateContact: () => null,
    deleteContact: () => null,
});

export default AuthContext;
export const AuthContextProvider: FunctionComponent = ({ children }) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}