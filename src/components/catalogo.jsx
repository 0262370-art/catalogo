import React from 'react'


export default function catalogo({ productos, onClick }) {

  return (
    <>
      <div className='flex flex-wrap justify-between align-baseline'>
        {productos.map((producto) => (
          <div key={producto.id} className='flex justify-center shadow shadow-amber-500 border-amber-600 w-3/10 m-2 rounded gap-2 bg-yellow-50'>
            <div>
              <h1 className='my-2 font-bold'>{producto.nombre}</h1>
              <p className='text-gray-500'>{producto.descripcion}</p>
              <p className='text-gray-500'>cantidad: {producto.cantidad}</p>
              <button onClick={() => onClick(producto.id)} className="px-6 py-3 bg-yellow-100 text-green-700 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-6 active:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-2">
                ¡𝒽𝒶𝓏 𝒸𝓁𝒾𝒸 𝒶𝓆𝓊𝒾!
              </button>
            </div>
            <img src={producto.src} alt="imagen" className='w-40 h-40' />
          </div>

        ))}

      </div>

    </>
  )
}
