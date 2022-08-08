import ProductList from '../../component/product/productList/ProductList';
import React, { useEffect } from 'react';
import LastProduct from '../../component/product/productLastest/LastProduct';
import axios from 'axios';
import { useState, createContext, useContext } from 'react';
import { Products } from '@/interface';
import CartContext from '../../store/Context';
import Loading from '../../component/loading/Loading';
const Home: React.FC = () => {
  // const CartProduct = useContext(CartContext);
  const baseURL = import.meta.env.VITE_API_BASE as string;

  const [products, setProducts] = useState<Products[]>([]);
  const [lastProducts, setLastProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${baseURL}`);
      setProducts(res.data);
    };
    getProducts();
  }, []);
  //Get LastProduct

  useEffect(() => {
    setLoading(true);
    const getLastProducts = async () => {
      const res = await axios.get(`${baseURL}/last-product`);
      setLastProducts(res.data);
      setLoading(false);
    };
    getLastProducts();
    
  }, []);
  return (
    <>
      {loading?<Loading/>:<LastProduct LastProduct={lastProducts} />}
      {products.length && <ProductList product={products} />}
    </>
  );
};

export default Home;
