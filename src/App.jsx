import { useState } from 'react'
import Cart from './Cart'
import './App.css'


// componentes controlados 

let products = [
  { name: 'Smartphone', price: 1500, image: 'https://source.unsplash.com/100x100/?iphone' , color: 'black', size: '5.7'},
  { name: 'Notebook', price: 3500, image: 'https://source.unsplash.com/100x100/?notebook', color: 'gray', size: '15.6'},
  { name: 'Tablet', price: 500, image: 'https://source.unsplash.com/100x100/?tablet' , color: 'white', size: '10.0'}
]

function App() {

  return (
    <>
      <Cart products={products} />
    </>
  )
}

export default App
