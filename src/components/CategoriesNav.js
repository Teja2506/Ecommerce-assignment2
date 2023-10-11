import React, { useEffect, useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function () {

    const [sideNav, setSideNav] = useState(false)

    let categoryUrl = 'https://dummyjson.com/products/categories'

    const [categories, setCategories] = useState([])


    useEffect(() =>{
        getAllCategories()
    },[])

    async function getAllCategories(){
        let response = await fetch(categoryUrl);
        let data = await response.json();
        console.log(data)
        setCategories(data)
    }



  return (
    <div className='h-14 bg-slate-600 fixed w-full shadow-lg'>
        <header className='flex h-14 max-w-7xl mx-auto justify-start items-center text-white ml-8'>
        <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer flex font-bold mr-14'>
                <AiOutlineMenu size={22} />
                <h2 className='text-base font-xl ml-2'>All</h2>
        </div>
        <div className='flex justify-between items-center gap-3'>
          {categories.map((category, i) => {
           if ((i) % 2 === 0) {
            return (
            <Link to={`category/${category}`} className="block px-3 text-white text-md capitalize" key={i}>{category}</Link>
           );
            }
            return null;
          })}
        </div>
        </header>
        {
            sideNav? (
                <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={() => setSideNav(!sideNav)} />
            ):("")
        }
        <div className={sideNav?
        'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 overflow-y-auto':
        'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={() => setSideNav(!sideNav)} className='absolute right-4 top-4 cursor-pointer' size={25} />
            <h2 className='text-2xl p-4 mx-6'>All Categories</h2>
            <nav>
            <ul className="mt-4">
        {categories.map((category,i)=>{
          return(
          <li className="mb-2 ml-4" key={i} onClick={() => setSideNav(!sideNav)}>
            <Link to={`category/${category}`} className="block px-4 py-2 text-black hover:bg-gray-100 text-xl capitalize">{category}</Link>
          </li>
          )
        })}
      </ul>
            </nav>
        </div>
    </div>
  )
}
