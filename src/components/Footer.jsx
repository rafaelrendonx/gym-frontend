
export const Footer = () => {

    return (
        <div>
            <footer className="bg-dark text-center text-white footer">
                <div className="container">
                    <section className="mb-5">
                        <a className="btn btn-outline-light btn-floating m-4" href="www.facebook.com" role="button"><i className="fab fa-facebook-f m-2" /></a>
                        <a className="btn btn-outline-light btn-floating m-4" href="www.twitter.com" role="button"><i className="fab fa-twitter m-2" /></a>
                        <a className="btn btn-outline-light btn-floating m-4" href="www.google.com" role="button"><i className="fab fa-google m-2" /></a>
                        <a className="btn btn-outline-light btn-floating m-4" href="www.instagram.com" role="button"><i className="fab fa-instagram m-2" /></a>
                    </section>
                </div>
                <p>Todos los derechos reservados. Gym Zone.</p>
            </footer>
        </div>
    )
}