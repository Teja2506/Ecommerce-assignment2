import { useState } from "react"
import AppContext from "./AppContext"
import toast from "react-hot-toast"

export default function AppState({children}) {

    const [cartItems, setCartItems] = useState([])
    const [wishlist, setWishlist] = useState([])

    const addProductsToCart = (product) =>{
        const existingProduct = cartItems.find(p => p.id === product.id);
        if(existingProduct){
          const updatedCartItems = cartItems.map((p) =>
          p.id === product.id ?{...p,quantity: p.quantity + 1}:p)
          setCartItems(updatedCartItems)
        } else {
          setCartItems([...cartItems,{...product,quantity:1}])
        }
    }

    const removeProductFromCart = (product) => {
      let updatedCartItems = cartItems.filter((item)=>{
        return item.id !== product.id
      })
      setCartItems(updatedCartItems)
      toast.success('Product removed from cart.')
    }

    const productDecrease = (product) => {
      const updatedCartItems = cartItems.map((p) =>
          p.id === product.id && p.quantity > 0 ?{...p,quantity: p.quantity - 1}:p).filter((p) => p.quantity > 0)
          setCartItems(updatedCartItems)
    }

    const productIncrease = (product) => {
      const updatedCartItems = cartItems.map((p) =>
          p.id === product.id ? {...p,quantity: p.quantity + 1}:p)
          setCartItems(updatedCartItems)
    }

    const addProductsToWishlist = (product) => {
      const existingProduct = wishlist.find(p => p.id === product.id);
      if(!existingProduct){
        setWishlist([...wishlist,product])
        toast.success('Product added successfully')
      }toast.success('Product already available in wishlist...')
    }

    const removeProductFromWishlist = (product) => {
      let updatedWishlist = wishlist.filter((item) => {
        return item.id !== product.id
      })
      setWishlist(updatedWishlist)
      toast.success('Product removed from cart.')
    }

  return (
    <AppContext.Provider value={
      {cartItems,
      addProductsToCart,
      removeProductFromCart,
      wishlist,
      addProductsToWishlist,
      removeProductFromWishlist,
      productDecrease,
      productIncrease,
      }}>
        {children}
    </AppContext.Provider>
  )
}
