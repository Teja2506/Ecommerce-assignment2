import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Toaster/>
    <HeaderComponent/>
    <div className="pt-32">
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="category/:id" element={<CategoryPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path='cart' element={<CartPage />}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
