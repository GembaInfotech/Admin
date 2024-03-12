
import React, { Children } from 'react'
import Navbar from '../Components/Navbar';
function Layout({children}) {
  return (
    <>
   
   <div className='flex min-h-screen  bg-[#fff]'>
  <div className=''>
<Navbar/>

  </div>
  <div className=' w-full  max-h-screen overflow-y-scroll'>
    {children}

  </div>

</div>

    </>
   
  )
}

export default Layout;
