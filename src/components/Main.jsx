import { useNavigate } from 'react-router-dom';
import { Calistenia } from '../pages/Calistenia'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../routes";

export const Main = () => {

    const navigate = useNavigate();
    const navigateTo = ({ target }) => {
        const { name } = target;
        navigate(name);
    }

    return (
        <>
            <section className='imagen-fondo'>
                <div className='contenido-fondo'>
                    <h1>Gym Zone</h1>
                    <p className='text-center'>Todo el equipo que necesitas para tu gimnasio.</p>
                </div>
            </section>

            <section>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch">

                    <div className='container'>
                        <div className="bg-image hover-overlay ripple shadow-1-strong d-flex flex-column h-100 text-white text-shadow-1 content">
                            <img src="https://media.revistagq.com/photos/61a7607b21a47a71e216357f/16:9/w_1920,c_limit/GettyImages-1125840227.jpg" className="image h-100 overflow-hidden text-bg-dark shadow-lg content-image" alt="..." onClick={navigateTo} name="maquinas" />
                        </div>
                        <div className="middle">
                        <button className='btn bg-transparent text' onClick={navigateTo} name="maquinas">Máquinas</button>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="bg-image hover-overlay ripple shadow-1-strong d-flex flex-column h-100 text-white text-shadow-1 content">
                            <img src="https://media.gq.com.mx/photos/61fbe7e4c981b856e369749e/16:9/w_1920,c_limit/calistenia.jpg" className="image h-100 overflow-hidden text-bg-dark shadow-lg content-image" alt="..." onClick={navigateTo} name="calistenia" />
                        </div>
                        <div className="middle">
                        <button className='btn bg-transparent text' onClick={navigateTo} name="calistenia">Calistenia</button>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="bg-image hover-overlay ripple shadow-1-strong d-flex flex-column h-100 text-white text-shadow-1 content">
                            <img src="https://mundoentrenamiento.com/wp-content/uploads/2021/06/Weightlifting-1.jpg" className="image h-100 overflow-hidden text-bg-dark shadow-lg content-image" alt="..." onClick={navigateTo} name="pesas" />
                        </div>
                        <div className="middle">
                            <button className='btn btn-outline-danger bg-transparent text' onClick={navigateTo} name="pesas">Pesas</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};