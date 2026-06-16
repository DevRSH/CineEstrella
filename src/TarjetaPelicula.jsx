import poster from './assets/Pelicula.jpg'

function TarjetaPelicula({ entradas }) {
  const nombrePelicula = 'Toy Story'
  const precioEntrada = 6500
  const numeroEntradas = Number(entradas) || 0
  const totalPagar = precioEntrada * numeroEntradas

  return (
    <section className="tarjeta-pelicula" aria-label="Tarjeta de pelicula">
      <img src={poster} alt={`Poster de ${nombrePelicula}`} className="poster" />
      <h2>{nombrePelicula}</h2>
      <p>
        <strong>Precio por entrada:</strong> ${precioEntrada.toLocaleString('es-CL')}
      </p>
      <p>
        <strong>Entradas:</strong> {numeroEntradas}
      </p>
      <p className="total">
        <strong>Total a pagar:</strong> ${totalPagar.toLocaleString('es-CL')}
      </p>
    </section>
  )
}

export default TarjetaPelicula
