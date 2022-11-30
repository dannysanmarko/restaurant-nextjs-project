import Link from 'next/link';
import LayoutError from '../layouts/404';

const ErrorPage = () => (
  <LayoutError>
    <section className="error-page">
      <div className="container">
        <h1>Error 404</h1>
        <p>Woops. Parece que esta pagina no existe! 😭</p>
        <Link href="/platos" className="btn btn--rounded btn--yellow">Volver a los platos</Link>
      </div>
    </section>
  </LayoutError>
)

export default ErrorPage