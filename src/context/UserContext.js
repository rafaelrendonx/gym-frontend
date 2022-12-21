import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();
const { Provider } = UserContext;

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(undefined);
    const [userId, setUserId] = useState(undefined);
    const [nombre, setNombre] = useState(undefined);

    const saveToken = (token) => setToken(token);
    const saveUserId = (userId) => setUserId(userId);
    const saveNombre = (nombre) => setNombre(nombre);

    const clearContext = () => {
        setToken(null);
        setUserId(null);
        setNombre(null);
        localStorage.clear();
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const nombre = localStorage.getItem('nombre')
        if (token) {
            saveToken(token);
            saveUserId(userId);
            saveNombre(nombre);
        } else {
            saveToken(null)
        }
    }, []);

    return (
        <Provider value={{ token, saveToken, saveUserId, userId, nombre, saveNombre, clearContext }}>
            {children}
        </Provider>
    );
};
