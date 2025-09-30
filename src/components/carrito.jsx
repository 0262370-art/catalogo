import React from 'react'

export default function carrito({productos}) {


  return (
    <div className='flex flex-wrap fixed bottom-0 bg-green-500 w-dvw'>
      {productos.map((producto) => (
        <div key={producto.id} className='flex justify-center shadow-md shadow-gray-700 border border-green-800  bg-green-200 w-2/12 m-2 gap-2 rounded rouded-3x1'>
          <p>{producto.nombre}</p>
          <p className='text-gray-500'>cantidad: {producto.cantidad}</p>
          <button className="w-6 h-6 text-red-500 text-xl font-bold rounded-full flex items-center justify-center hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 cursor-pointer">
            &times;
          </button>

        </div>
      ))}

    </div>
  )
}
