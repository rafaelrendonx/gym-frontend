import { Navbar } from '../components/Navbar';

export const GymPage = () => {

  return (
    <>
      <Navbar />

      <section className='imagen-fondo'>
        <div className='contenido-fondo'>
          <h1>Gym Zone</h1>
          <p>Todo el equipamiento que necesitas para tu gimnasio.</p>
        </div>
      </section>

      <section>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch">


          <div className="bg-image hover-overlay ripple shadow-1-strong d-flex flex-column h-100 text-white text-shadow-1 content">
            <img src="https://media.revistagq.com/photos/61a7607b21a47a71e216357f/16:9/w_1920,c_limit/GettyImages-1125840227.jpg" className="h-100 overflow-hidden text-bg-dark shadow-lg content-image" alt="..." />
          </div>



          <div className="bg-image hover-overlay ripple shadow-1-strong d-flex flex-column h-100 text-white text-shadow-1 content">
            <img src='https://media.gq.com.mx/photos/61fbe7e4c981b856e369749e/16:9/w_1920,c_limit/calistenia.jpg' className="h-100 overflow-hidden text-bg-dark shadow-lg content-image" alt="..." />
          </div>



          <div className="bg-image hover-overlay ripple shadow-1-strong d-flex flex-column h-100 text-white text-shadow-1 content">
            <img src="https://mundoentrenamiento.com/wp-content/uploads/2021/06/Weightlifting-1.jpg" className="h-100 overflow-hidden text-bg-dark shadow-lg content-image" alt="..." />
          </div>



        </div>
      </section>


      <footer>
        <p>Todos los derechos reservados. Gym Zone.</p>
      </footer>
    </>
  );
};
