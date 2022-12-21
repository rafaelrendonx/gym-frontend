import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

export const CarritoPage = () => {

    const navigate = useNavigate();
    const { carrito, eliminarDeCarrito, limpiarCarrito, } = useContext(CarritoContext)
    const [first, setFirst] = useState(false);

    const handleClick = () => {
        setFirst(!first);
        setTimeout(() => {
            setFirst(!!first);
            limpiarCarrito()
            navigate('/')
        }, 3500);
        
    };

    const total = carrito.reduce((valorActual, siguienteValor) => {
        return (
            (typeof valorActual === "number" ? valorActual : valorActual.precio) + siguienteValor.precio);
    }, 0);

    return !carrito.length ? (
        <div className='equipo row justify-content-center p-4 m-4'>

            <h2 className='text-center mt-4'>Carrito</h2>

            <h4 className='text-center mt-4'>No hay productos en el carrito.</h4>

            <button onClick={() => navigate('/')} className="btn btn-dark w-25 m-4">Ir a Home</button>
        </div>
    ) :
        (
            <div className='equipo row justify-content-center p-4 m-4'>

                <h2 className='text-center mt-4'>Carrito</h2>
                <container className="p-4 m-4">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="colSpan" className="table-dark">#</th>
                                <th scope="colSpan" className="table-dark">Eliminar</th>
                                <th scope="colSpan" className="table-dark">Equipo</th>
                                <th scope="colSpan" className="table-dark">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((equipo, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><button onClick={() => eliminarDeCarrito()} className="btn btn-dark">Eliminar</button></td>
                                    <td>{equipo.nombre}</td>
                                    <td>${equipo.precio}</td>
                                </tr>
                            ))}
                            <tr>
                            <th colspan="3" class="table-active">Total</th>
                            <th>${total}</th>
                            </tr>
                        </tbody>
                    </table>
                </container>

                <button onClick={() => navigate('/')} className="btn btn-dark w-25 m-4">Ir a Home</button>                       
                <button onClick={() => limpiarCarrito()} className="btn btn-dark w-25 m-4">Limpiar Carrito</button>
                <button className="btn btn-dark w-25 m-4" onClick={handleClick}>Terminar Compra</button>
                <div className={`mt-3 text-center alert alert-dark ${first ? '' : 'd-none'}`}>¡Compra Realizada!</div>

            </div>

        );
};