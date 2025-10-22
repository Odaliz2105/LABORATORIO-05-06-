/*
  1- Props 
*/

import Sexto from "./Sexto"

const Quinto = () => {
  const userProfile = {
    name: "Matew",
    rol: "Employee",
    email: "matew@gmail.com",
  }

  // Ejemplo producto 
  const productInfo = {
    title: "Smartwatch",
    price: 99.99,
    stock: 15
  }

  return (
    <>
      <h1 className="font-bold text-2xl">Props</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Permiten pasar datos de un componente padre a un hijo.
        </li>
      </ul>
  
      <h2 className="text-green-700 text-center mt-8">Ejemplo 1 - Padre (User Profile)</h2>
      
      <div className="border-2 border-green-500 flex-colum justify-center items-center w-120 mx-auto mb-8 p-4">
        <Sexto data={userProfile}/>
      </div>


      {/* ejemplo */}
      <h2 className="text-blue-700 text-center mt-8">Ejemplo 2 - Producto</h2>

      <div className="border-2 border-blue-500 flex-colum justify-center items-center w-120 mx-auto mb-8 p-4">
        <ProductCard data={productInfo}/>
      </div>
    </>
  )
}

export default Quinto
//Componente hijo
const ProductCard = ({ data }) => {
  return (
    <div className="text-center">
      <h3 className="font-semibold underline mb-2">Producto</h3>
      <p><strong>Nombre:</strong> {data.title}</p>
      <p><strong>Precio:</strong> ${data.price}</p>
      <p><strong>Stock disponible:</strong> {data.stock}</p>
    </div>
  )
}
