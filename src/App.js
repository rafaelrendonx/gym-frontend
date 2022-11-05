import { DataProvider } from './context/DataContext';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <DataProvider>
      <AppRouter />
    </DataProvider>
  );
};
