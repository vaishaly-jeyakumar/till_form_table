import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import usercontext from '../Context/Context'

function Topbar() {
  const value = useContext(usercontext)
  return (
    <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{value}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to={'/Home'}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" >Home</a>
        </li>
        </Link>
        <Link to={'/Dashboard'}>
        <li class="nav-item">
          <a class="nav-link" >Features</a>
        </li>
        </Link>
        <Link to={'/Pricing'}> 
        <li class="nav-item">
          <a class="nav-link" >Pricing</a>
        </li>
        </Link>
       <Link to={'/Setting'}>
       <li class="nav-item">
          <a class="nav-link ">Setting</a>
        </li>
       </Link>
       <Link to={'/Hooks'}>
       <li class="nav-item">
          <a class="nav-link ">Hooks</a>
        </li>
       </Link>
       <Link to={'/Forms'}>
       <li class="nav-item">
          <a class="nav-link ">Forms</a>
        </li>
       </Link>
       <Link to={'/Form1'}>
       <li class="nav-item">
          <a class="nav-link ">Forms1</a>
        </li>
       </Link>
       <Link to={'/students'}>
       <li class="nav-item">
          <a class="nav-link ">StudentList</a>
        </li>
       </Link>
       <Link to={'/task1'}>
       <li class="nav-item">
          <a class="nav-link ">Task1</a>
        </li>
       </Link>
       
        
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Topbar