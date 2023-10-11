import React, { useContext } from 'react'
import AppContext from '../context/AppContext/AppContext'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {MdDeleteOutline} from 'react-icons/md'

export default function Wishlist() {
  const appContext = useContext(AppContext)

  return (
    <div>
    {appContext.wishlist.map((product) =>{
      return(
      <>
      <div className='flex border ml-4 mr-4 border-gray-400 shadow-2xl gap-4 items-center rounded-3xl mb-4'>
        <img className="h-24 w-12 ml-2 rounded-xl" src={product.thumbnail} alt={product.title}/>
        <div className='ml-3'>
          <h2 className='text-lg mb-3 font-semibold'>{product.title}</h2>
          <p className='text-sm'>Brand :{product.brand}</p>
          <p className='text-sm'>Price : $ {product.price.toFixed(2)}</p>
        </div>
        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={() => {appContext.addProductsToCart(product)}}><BsFillCartPlusFill/></button>
        <button className="flex ml-auto text-white mr-4 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={() => {appContext.removeProductFromWishlist(product)}}><MdDeleteOutline/></button>
      </div>
      </>
      )
      })}
    </div>
  )
}
