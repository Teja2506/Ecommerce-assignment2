import React, { useContext } from 'react'
import {FaShopify} from 'react-icons/fa'
import NavComponent from './NavComponent'
import CategoriesNav from './CategoriesNav'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {


  return (
    <>
    <div className='bg-slate-800 fixed w-full shadow-lg'>
        <header className='flex h-16 max-w-7xl mx-auto justify-between items-center ml-8'>
          <Link to='/'>
            <div className='flex items-center gap-2'>
                <FaShopify className='text-white' size={36}/>
                <h1 className='text-white text-xl font-semibold'>Shopster⭐</h1>
            </div>
          </Link>
            <NavComponent/>
        </header>
        <CategoriesNav/>
    </div>
    </>
  )
}
