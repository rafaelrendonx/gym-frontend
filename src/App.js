import './App.css';
import './assets/styles/main.css'
import { AppRouter } from './routes/AppRouter';
import { UserProvider } from './context/UserContext';
import { DataProvider } from './context/DataContext';
import { CarritoProvider } from './context/CarritoContext'

export const App = () => {
  return (
    <UserProvider>
      <DataProvider>
        <CarritoProvider>
          <AppRouter />
        </CarritoProvider>
      </DataProvider>
    </UserProvider>
  );
};
