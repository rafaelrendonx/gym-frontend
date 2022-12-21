import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [calisteniaData, setCalisteniaData] = useState([]);
  const [maquinasData, setMaquinasData] = useState([]);
  const [pesasData, setPesasData] = useState([]);

  useEffect(() => {
    axios
      .get('https://gym-backend.vercel.app/equipamiento/calistenia')
      .then((response) => setCalisteniaData(response.data));
  }, []);

  useEffect(() => {
    axios
      .get('https://gym-backend.vercel.app/equipamiento/maquinas')
      .then((response) => setMaquinasData(response.data));
  }, []);

  useEffect(() => {
    axios
      .get('https://gym-backend.vercel.app/equipamiento/pesas')
      .then((response) => setPesasData(response.data));
  }, []);

  return (
    <DataContext.Provider
      value={{
        calisteniaData,
        maquinasData,
        pesasData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};