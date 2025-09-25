import React from 'react'

export default function catalogo() {

  const productos = [
    {nombre: "camera", cantidad: 4, id:1234},
    {nombre: "lente", cantidad: 4, id:1234},
    {nombre: "microfono", cantidad: 4, id:1234}
  ]

  return (
    <>
        <div  className='flex flex-wrap justify-center '>
            {productos.map((producto) => (
              <div key={producto.id} className='flex justify-center shadow shadow-amber-500 border-amber-800  w-4/12'><p>{producto.nombre}</p></div>
              
            ))} 

        </div>
        
    </>
  )
}
