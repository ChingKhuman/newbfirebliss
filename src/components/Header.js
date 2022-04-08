import React from 'react'
import { icons } from 'react-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaCartPlus, FaUser} from 'react-icons/fa'


function Header() {

  const {cartItems} = useSelector(state=>state.cartReducer)
  const {user} = JSON.parse(localStorage.getItem('currentUser'))
  const logout=()=>{
    localStorage.removeItem('currentUser');
    window.location.reload();
  };
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">BLISS CAKE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
         <FaUser/> {user.email.substring(0, user.email.length -10)}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/orders">Order</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart"><FaCartPlus/>{cartItems.length}</Link>
        </li>
        
       
         
        </div>
        </div>
        </div>
        </nav>
        </div>
    

  )
}

export default Header