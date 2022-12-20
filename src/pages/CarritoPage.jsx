import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

export const CarritoPage = () => {

    const { carrito, eliminarDeCarrito, limpiarCarrito, } = useContext(CarritoContext)

    return (

        <div className='equipo row justify-content-center m-4'>

            <h2 className='text-center mt-4'>Carrito</h2>

            <table className="table table-dark table-striped">
                <thead>
                    <tr> 
                        <th scope="colSpan" className="table-dark">#</th>
                        <th scope="colSpan" className="table-dark">Equipo</th>
                        <th scope="colSpan" className="table-dark">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map(equipo => (
                        <tr key={equipo._id}>
                            <td>{equipo.nombre}</td>
                            <td>{equipo.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>

    );
};