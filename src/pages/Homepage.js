import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireconfig';
import { fireproducts } from '../firecommerce-products';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





  function Homepage() {

    const[products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state=>state.cartReducer)
    const [searchKey, setSearchKey] = useState('')
    const [filterType, setFilterType] = useState('');

    useEffect(() =>{
    getdata();
     }, [] );

 async function getdata() {
  
  try {
    setLoading(true)
    const users= await getDocs(collection(fireDB, "products"));
    const producstArray = [];
      users.forEach((doc) => {

        const obj={
          id:doc.id,
          ...doc.data(),
        };
        producstArray.push(obj)
        setLoading(false)
        
      }) ;  
      
      setProducts(producstArray);
    } catch(error) {
      console.log(error);
      setLoading(false)
    }
 }

 useEffect(()=> {
   localStorage.setItem('cartItems' , JSON.stringify(cartItems));

 }, [cartItems]);
 
  const addToCart=(product)=>{
    dispatch({type: "ADD_TO_CART", payload: product});
  };
 
  return (
    <Layout loading={loading}>
     <div className='container'>
     <div className='d-flex w-50'>
     <input type='text' value={searchKey}
     onChange={(e)=> {setSearchKey(e.target.value)}}     
       className='form-control' placeholder='search items'/>

       <select  className='form-control' value={filterType}
       onChange={(e) => {setFilterType(e.target.value)}}>
         <option value=''>All</option>
         <option value=''>vanilla</option>
         <option value=''>cheesy</option>
         <option value=''>chocolate</option>
         <option value=''>All</option>
       </select>
       
     </div>
     <div className='row'>
       {products.filter(obj=>obj.name.toLowerCase().includes(searchKey))
       .filter((obj) =>obj.category.toLowerCase().includes(filterType)).map((product) =>{
         return <div className='col-md-4'>
         <div className='m-2 p-1 product position-relative'>
         <div className='produt-content'>
         <p>{product.name}</p>
         <div className='text-center'>
         <img src={product.imageURL} alt='' className='products-img'/>
         </div>
         </div>
         <div className='product-actions'>
         <h2>Rs/-{product.price} </h2>
         <div className='d-flex'>
         <button className='mx-2' onClick={()=>addToCart(product)}> ADD TO CART</button>
         <button onClick={()=> {
           navigate(`/productinfo/${product.id}`)
         }}>VIEW</button>
         </div>
         </div>
         </div>
         </div>
       })}
     </div>
     </div>
     
     
    </Layout>
  )
}

export default Homepage