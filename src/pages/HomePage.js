import React, { useEffect, useState } from 'react'
import LoaderComponet from '../components/LoaderComponet';
import ProductCard from '../components/ProductCard';


function HomePage() {

    const url = "https://dummyjson.com/products";
  let [productsData, setProductsData] = useState([]);
  let [loading, setLoading] = useState(true);
//   let [searchTerm,setSearchTerm] = useState('');

  async function getAllProducts() {
    let response = await fetch(url);
    let data = await response.json();
    setProductsData(data);
    setLoading(false);
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <div className='max-w-4xl mx-auto flex flex-wrap justify-between'>
        {loading ? (<LoaderComponet />):(
            productsData.products.map((product)=>{
                return(
                    <ProductCard key={product.id} product={product} />
                )
            })
        )}
    </div>
  )
}

export default HomePage