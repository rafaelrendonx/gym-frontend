import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();
const { Provider } = UserContext;

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(undefined);
    const [userId, setUserId] = useState(undefined);

    const saveToken = (token) => setToken(token);
    const saveUserId = (userId) => setUserId(userId);

    const clearContext = () => {
        setToken(null);
        setUserId(null);
        localStorage.clear();
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token) {
            saveToken(token);
            saveUserId(userId);
        } else {
            saveToken(null)
        }
    }, []);

    return (
        <Provider value={{ token, saveToken, saveUserId, userId, clearContext }}>
            {children}
        </Provider>
    );
};
