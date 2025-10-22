/*
  1- customHook
*/

import { useState } from "react"
import { useFetch } from "../customHook/useFecth"

const Cuarto = () => {
  
  const [products, setProducts] = useState([])
  const [memes, setMemes] = useState([])
  const [users, setUsers] = useState([])

  const fetchDataBackend = useFetch()

  const getDataProducts = async () => {
    const products = await fetchDataBackend("https://fakestoreapi.com/products")
    setProducts(products)
  }
  
  const getDataMemes = async () => {
    const memes = await fetchDataBackend("https://api.imgflip.com/get_memes")
    setMemes(memes)
  }

  const getDataUsers = async () => {
    const userResponse = await fetchDataBackend("https://randomuser.me/api/?results=5")
    setUsers(userResponse.results)
  }

  // Ejemplo  API de Pokémon
  const [pokemons, setPokemons] = useState([])

  const getDataPokemons = async () => {
    const pokemonResponse = await fetchDataBackend("https://pokeapi.co/api/v2/pokemon?limit=5")
    setPokemons(pokemonResponse.results)
    console.log(pokemonResponse)
  }

  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite encapsular lógica reutilizable y que puede ser utilizado en cualquier componente.
        </li>
      </ul>

    
      <div className="flex justify-center mb-12 mt-8">
        <div className="w-120 border rounded-lg p-4 w-80 text-center">
          <h2 className="text-lg font-semibold mb-2 underline">Ejemplo 1 - Varios endpoints</h2>

          {/*productos */}
          <pre>{JSON.stringify(products[3]?.title)}</pre>

          {/* memes */}
          <pre>{JSON.stringify(memes.data?.memes[0]?.name)}</pre>

          {/* usuarios */}
          <pre>{JSON.stringify(users[0]?.name?.first)}</pre>

          <div className="mt-4">
            <button
              className="bg-violet-700 text-white py-1 px-3 mx-1 rounded"
              onClick={getDataProducts}
            >
              Obtener Productos
            </button>

            <button
              className="bg-violet-700 text-white py-1 px-3 mx-1 rounded"
              onClick={getDataMemes}
            >
              Obtener Memes
            </button>

            <button
              className="bg-violet-700 text-white py-1 px-3 rounded mt-2"
              onClick={getDataUsers}
            >
              Obtener Usuarios
            </button>
          </div>
        </div>
      </div>

      {/* ejemplo */}
      <div className="flex justify-center mb-12">
        <div className="w-120 border border-blue-500 rounded-lg p-4 w-80 text-center">
          <h2 className="text-lg font-semibold mb-2 underline text-blue-700">
            Ejemplo 2 - API de Pokémon
          </h2>

          <ul className="text-left mb-3">
            {pokemons.map((p, i) => (
              <li key={i} className="capitalize">• {p.name}</li>
            ))}
          </ul>

          <button
            className="bg-blue-600 text-white py-1 px-3 rounded"
            onClick={getDataPokemons}
          >
            Obtener Pokémons
          </button>
        </div>
      </div>
    </>
  )
}

export default Cuarto
