import { useState } from 'react'
import Encabezado from './Encabezado'
import TarjetaPelicula from './TarjetaPelicula'
import './App.css'

function App() {
  const [entradas, setEntradas] = useState(2)

  const manejarCambioEntradas = (event) => {
    const valor = event.target.value

    // Permite solo numeros y campo vacio mientras el usuario escribe.
    if (valor === '' || /^\d+$/.test(valor)) {
      setEntradas(valor)
    }
  }

  return (
    <main className="app">
      <Encabezado />

      <section className="control-entradas">
        <label htmlFor="entradas">N de entradas</label>
        <input
          id="entradas"
          type="text"
          inputMode="numeric"
          value={entradas}
          onChange={manejarCambioEntradas}
          placeholder="Escribe la cantidad"
        />
      </section>

      <TarjetaPelicula entradas={entradas} />
    </main>
  )
}

export default App
