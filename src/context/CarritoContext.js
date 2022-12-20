import { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarACarrito = (pelicula) => setCarrito([...carrito, pelicula]);
  
  const eliminarDeCarrito = (index) => {
    const newCarrito = [...carrito];
    newCarrito.splice(index, 1);
    setCarrito(newCarrito);
  };

  const limpiarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarACarrito,
        eliminarDeCarrito,
        limpiarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}