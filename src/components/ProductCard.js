import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'
import AppContext from '../context/AppContext/AppContext'

export default function ProductCard({ product }) {
  const {addProductsToWishlist} = useContext(AppContext)
  return (
    <div className="w-56 border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-600">
        <img src={product.thumbnail} className="h-40 mx-auto w-40 rounded-md" alt={product.title} />
        <Link to={`/product/${product.id}`}>
            <h3 className="mt-3 text-center text-lg">{product.title}</h3>
        </Link>
        <div className="mt-4 flex justify-between items-center">
        <div>
          <p>$ {product.price.toFixed(2)}</p>
        </div>
        <AiOutlineHeart size={22} className='cursor-pointer' onClick={()=>{addProductsToWishlist(product)}}/>
        </div>
    </div>
    
  )
}
