import React, { useContext, useState } from 'react'
import {BsCart3, BsBagHeart} from 'react-icons/bs'
import {BiSolidUserCircle, BiHomeAlt2} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import Wishlist from './Wishlist'
import AppContext from '../context/AppContext/AppContext'
import emptyWishlist from '../Images/emptyWishlist.png'

export default function NavComponent() {

    const [sideNav, setSideNav] = useState(false)
    const {wishlist} = useContext(AppContext)

  return (
    <>
    <div className='flex space-x-12 text-white font-semibold items-center mr-3'>
        <Link to='/'>
        <div className='cursor-pointer flex font-bold'>
            <BiHomeAlt2 size={20} className='mx-1'/>
            <h3>Home</h3>
        </div>
        </Link>
        <Link to='cart'>
        <div className='cursor-pointer flex font-bold'>
            <BsCart3 size={20} className='mx-1'/>
            <h3>Cart</h3>
        </div>
        </Link>
        <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer flex font-bold'>
            <BsBagHeart size={20} className='mx-2'/>
            <h3>wishlist</h3>
        </div>
        <Link to='#'>
        <div className='cursor-pointer flex font-bold'>
            <BiSolidUserCircle size={26} className='mx-3'/>
            <h3>Account</h3>
        </div>
        </Link>
    </div>
    {
            sideNav? (
                <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={() => setSideNav(!sideNav)} />
            ):("")
        }
        <div className={sideNav?
        'fixed top-0 right-0 w-[450px] h-screen text-center bg-white z-10 duration-300 overflow-y-auto':
        'fixed top-0 right-[-100%] w-[300px] h-screen text-center bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={() => setSideNav(!sideNav)} className='absolute right-4 top-4 cursor-pointer' size={25} />
            <h2 className='text-2xl p-4 mx-6'>Wishlist</h2>
            {wishlist.length>0?<Wishlist/>:(
            <div>
            <img src={emptyWishlist} alt='emptyWishlist'/>
            <h1 className='text-xl font-semibold text-red-600 mt-4'>Wishlist is Empty</h1>
            </div>
            )}
        </div>
    </>
  )
}
