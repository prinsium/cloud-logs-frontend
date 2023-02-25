import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import '../App.css'

export const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate("/login")
  }
  return (
  
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Cloud-Logs</Link>
    {/* <Link className="navbar-brand" to='/'>
      <img src="../images/logo192.png" alt="../images/logo192.png"/>
      <small>Cloud-Logs</small>
    </Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/Home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/About'>About</Link>
        </li>
        </ul>
        {!localStorage.getItem('token')?<form className="d-flex">
    <Link type="button" class="btn btn-outline-secondary mx-2" aria-current="page" to='/Login'>Login</Link>
    <Link type="button" class="btn btn-outline-info" aria-current="page" to='/Signup'>Sign Up</Link>
    </form>: <button onClick={handleLogout} type="button" class="btn btn-outline-dark">Logout</button>}
    </div>
  </div>
</nav>
  )
}


export default Navbar