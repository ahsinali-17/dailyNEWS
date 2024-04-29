import React from 'react'
import loader from './loader.gif'
const Loader =()=> {

     return(
       <div className='text-center'>
         <img src={loader} width="50px" alt='loading...'/>
       </div>
     )
} 

export default Loader