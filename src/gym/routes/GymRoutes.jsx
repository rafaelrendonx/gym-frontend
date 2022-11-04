import { Route, Routes } from 'react-router-dom';
import { Calistenia } from '../pages/Calistenia';
import { GymPage } from '../pages/GymPage';
import { Maquinas } from '../pages/Maquinas';
import { Pesas } from '../pages/Pesas';

export const GymRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GymPage />} />

      <Route path="/maquinas" element={<Maquinas />} />
      <Route path="/calistenia" element={<Calistenia />} />
      <Route path="/pesas" element={<Pesas />} />
    </Routes>
  );
};
