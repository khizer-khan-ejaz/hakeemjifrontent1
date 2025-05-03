"use client"

import React from 'react'

const Navbar = () => {

	// const state = useSelector(state =>{
	// 	console.log("main states in store is " , state)
	// })

  return (
	<div className='w-[100vw] h-[10vh] flex justify-center items-center'>

		{/* logo , website name container */}
		<div className='md:text-[25px] uppercase'>
			<h1 style={{fontFamily : "Playwrite India" , fontSize :"400"}}> Center for online treatment in Unani Medicine  </h1>
		</div>

	</div>
  )
}

export default Navbar
