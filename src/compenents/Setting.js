import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Setting() {
  return (
   <>
    <div className='m-5'>
        <Link to={'profile'}>
        <button className='bg-primary'>Profile</button>
        </Link>
        
        </div>
    <Outlet/>
   </>
  )
}

export default Setting