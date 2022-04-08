import React, { useEffect, useState } from 'react'
import Layout from '../Layout';
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireconfig';

function OrderPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() =>{
        getdata();
         }, [] );
    
     async function getdata() {
      
      try {
        setLoading(true);
        const result= await getDocs(collection(fireDB, "orders"));
        const ordersArray = [];
          result.forEach((doc) => {               
            ordersArray.push(doc.data());
            setLoading(false);            
          }) ;

          console.log(ordersArray)  ;         
          setOrders(ordersArray);
        } catch(error) {
          console.log(error);
          setLoading(false);
        }
     }


  return (
    <Layout loading={loading}  >
    
     <div className='p-2'>
     {orders.map((order)=>{
        return(
        <table className='table mt-2 order'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
           
          </tr>
        </thead>
        <tbody>
        {order.cartItems.map((item)=>{
           return ( <tr>
              <td> <img src={item.imageURL} height='80' width='80'/></td>
              <td>{item.name}</td>
              <td>{item.price}</td>              
            </tr>
           )
          })}
        </tbody>
      </table>
        )
      })}
     </div>
    
    </Layout>
  )
}

export default OrderPage