import React from 'react'
import Carrito from './carrito'
import Catalogo from './catalogo'
import camara from '../assets/camara.png'
import lente from '../assets/lente.png'
import microfono from '../assets/microfono.png'
import television from '../assets/television.png'
import bocinas from '../assets/bocina.png'
import { useState } from 'react'

export default function catcar() {



    const [productos, setProductos] = useState([ //conviertes el "productos" en un useState
        { nombre: "𝒞𝒶𝓂𝑒𝓇𝒶", descripcion: "camara Canon EOS R7", src: camara, cantidad: 4, id: 1 },
        { nombre: "𝐿𝑒𝓃𝓉𝑒", descripcion: "lente Canon Rf 70 - 200mm", src: lente, cantidad: 4, id: 2 },
        { nombre: "𝑀𝒾𝒸𝓇𝑜𝒻𝑜𝓃𝑜", descripcion: "microfono razer seiren mini", src: microfono, cantidad: 4, id: 3 },
        { nombre: "𝒯𝑒𝓁𝑒𝓋𝒾𝓈𝒾𝑜𝓃", descripcion: "television 4K FULL HD", src: television, cantidad: 4, id: 4 },
        { nombre: "𝐵𝑜𝒸𝒾𝓃𝒶𝓈", descripcion: "bocinas BOSE S1", src: bocinas, cantidad: 4, id: 5 }
    ])

    const [productosCar, setProductosCar] = useState([])

    const agregar = (id) => {
        //encontrar el elemento donde se dio click en agregar
        const productosCopy = [...productos] //tener copia de productos
        const producto = productosCopy.find((p) => (p.id == id)) //producto1 es el producto del profe, esto es para encontrar el producto en la copia
        //encontrar el elemento donde se dio click en agregar

        //agrega elemento si el carrito esta vacio
        if (productosCar.length < 1) {
            const productosCarCopy = [...productosCar, { ...producto, cantidad: 1 }]
            setProductosCar(productosCarCopy)
            // le resta la cantidad del catalogo
            productosCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad - 1 : p))
            setProductos(productosCopy)
            // le resta la cantidad del catalogo
        }
        //agrega elemento si el carrito esta vacio

        //agregar eleento cuando el carrito no esta vacio
        else {
            const productoCar = productosCar.find((p) => (p.id == id))
            const productosCarCopy = [...productosCar]
            //agregar elemento cuando el carrito no esta vacio y ya se tiene un elemento similar (se aumenta cantidad)
            if (productoCar) {

                //resta la cantidad del catalogo
                productosCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad - 1 : p))
                setProductos(productosCopy)
                //resta la cantidad del catalogo

                //suma la cantidad del carrito
                productosCarCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad + 1 : p))
                setProductosCar(productosCarCopy)
                //suma la cantidad del carrito
            }
            else {
                productosCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad - 1 : p))
                setProductos(productosCopy)

                const productosCarCopy = [...productosCar, { ...producto, cantidad: 1 }]
                setProductosCar(productosCarCopy)
            }
            //agregar elemento cuando el carrito no esta vacio y ya se tiene un elemento similar (se aumenta cantidad)

        }//agregar eleento cuando el carrito no esta vacio
    } //HACER QUE LA CANTIDAD NO BAJE DE CERO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const eliminar = (id) => {
        const productosCarCopy = [...productosCar]
        setProductosCar(productosCarCopy.filter((p) => (p.id != id)))
        //REGRESARLE LA CANTIDAD AL CATALOGO EN ESA FUNCION ELIMINAR
    }

    return (
        <div>
            <Catalogo productos={productos} onClick={agregar}></Catalogo>
            <Carrito productos={productosCar}onClick={eliminar}></Carrito>
        </div>
    )
}
