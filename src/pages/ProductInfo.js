import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { doc, getDoc } from "firebase/firestore";
import fireDB from '../fireconfig';
import { getDefaultNormalizer } from '@testing-library/react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function ProductInfo() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state=>state.cartReducer)
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    try {
      setLoading(true)
      const productTemp= await getDoc(
        doc(fireDB, 'products', params.productid)
      );
      
          
       
        setProduct(productTemp.data());
        setLoading(false)
      } catch(error) {
        console.log(error);
        setLoading(false)
      }
   }

   const addToCart=(product)=>{
    dispatch({type: "ADD_TO_CART", payload: product});
  };
  useEffect(()=> {
    localStorage.setItem('cartItems' , JSON.stringify(cartItems));
 
  }, [cartItems]);
  return (
    <Layout loading={loading}>
    <div  className='container'>
    <div className='row justify-content-center'>
      <div className='col-md-8'>
      {product && (
        <div>
      <p><b>{product.name}</b></p>
      <img src={product.imageURL} className='product-info-img'/>
      <hr/>
      <p>{product.description}</p>
      <div className='d-flex justify-content-end my-3'>
       <button onClick={()=>addToCart(product)}>ADD TO CART</button>
       <Link className="page-link" to="/cart">Go to Cart</Link></div>

    </div>)}
      </div>
    </div>
    </div>
    
    </Layout>
  )
}

export default ProductInfo