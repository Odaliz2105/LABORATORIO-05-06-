/*

  1- useState

*/

import { useState } from "react"

const Segundo = () => {

  const [counter, setCounter] = useState(0)

  const handleReset = () => {
    setCounter(0)
  }

  // --- Ejemplo ---
  const [visitas, setVisitas] = useState(0)
  const [color, setColor] = useState("text-green-600")

  const aumentarVisita = () => {
    const nuevoValor = visitas + 1
    setVisitas(nuevoValor)

    if (nuevoValor < 5) setColor("text-green-600")
    else if (nuevoValor < 10) setColor("text-yellow-600")
    else setColor("text-red-600")
  }

  const resetVisitas = () => {
    setVisitas(0)
    setColor("text-green-600")
  }

  return (
    <>
      <h1 className="font-bold text-2xl">useState</h1>
      <hr className="border-gray-400 mb-8"/>

      
      <h2 className="text-xl font-semibold">Ejemplo original</h2>
      <div className="text-center mb-8">
        <h2 className="mt-4 mb-4">Likes del vídeo: {counter}</h2>
        <button className="bg-green-700 text-white py-1 px-3 mx-1 rounded" onClick={() => setCounter(counter + 1)}>Aumentar</button>
        <button className="bg-red-700 text-white py-1 px-3 mx-1 rounded" onClick={handleReset}>Resetar</button>
        <button className="bg-blue-700 text-white py-1 px-3 rounded" onClick={() => { setCounter(counter - 1) }}>Disminuir</button>
      </div>

      <hr className="border-gray-300 my-8"/>

      {/* Ejemplo2 */}
      <h2 className="text-xl font-semibold">Ejemplo personalizado</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          En este ejemplo, se usa <b>useState</b> para controlar la cantidad de visitas y el color del texto cambia según el número.
        </li>
      </ul>

      <div className="text-center mb-8">
        <h3 className={`mt-4 mb-4 font-semibold ${color}`}>
          Número de visitas: {visitas}
        </h3>
        <button className="bg-green-700 text-white py-1 px-3 mx-1 rounded" onClick={aumentarVisita}>Aumentar</button>
        <button className="bg-gray-700 text-white py-1 px-3 mx-1 rounded" onClick={resetVisitas}>Resetear</button>
      </div>
    </>
  )
}

export default Segundo
