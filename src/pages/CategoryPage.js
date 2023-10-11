import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import LoaderComponet from '../components/LoaderComponet';

export default function CategoryPage() {

    let {id} = useParams();
    const url = "https://dummyjson.com/products/category/";
    let [products,setProducts] = useState({});
    let [loading,setLoading] = useState(true);

  async function getProductsForCategory(){
    setLoading(true)
    let response = await fetch(url+id);
    let data = await response.json();
    setProducts(data);
    setLoading(false)
  }

  useEffect(()=>{
    getProductsForCategory()
  },[id])

  return (
    <div className='max-w-4xl mx-auto flex flex-wrap justify-between'>
        {loading ? (<LoaderComponet />):(
            products.products.map((product)=>{
                return(
                    <ProductCard key={product.id} product={product} />
                )
            })
        )}
    </div>
  )
}
