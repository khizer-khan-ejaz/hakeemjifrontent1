"use client"

import React, { useState } from 'react'
import {motion} from "framer-motion"
import { IoAddCircleSharp} from "react-icons/io5";
// import Image from 'next/image';


const SliderComp = () => {

	const[isExpand , setIsExpand] = useState(true)
	console.log("re-render")
	
	

  return (
	<div className='w-[100vw] h-[500px] flex  overflow-hidden gap-[10px] relative'>

		{/* left side image */}
		<div className='w-[35%] h-full flex justify-center items-center'>

			{/* expand button container */}
			<div className='absolute z-[110] left-0 flex justify-center items-center'>
				<div className='h-[2px] bg-black w-[100px]' />
				<IoAddCircleSharp onClick={()=>setIsExpand(prev => !prev)} size={"40px"} className='bg-white hover:p-[5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer' />
			</div>

{/* image container */}
			<div className='h-full w-full relative'>
			<motion.div
			initial={{ width : "full"}}
			animate={{ width: isExpand ? "80vw" : "100%" }} 
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className={` absolute flex justify-center items-center h-full w-full border border-solid border-black bg-green-500`}
			>
			<img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb66vNOJsVowhucOB_EDLVrV1EcxOQ-iPLmA&s"
          alt="Expandable"
          className="w-full h-full object-cover z-[100]"
        />

			</motion.div>
			</div>
			
		</div>

		{/* right side content */}
		<div className='w-[65%] absolute right-0 h-full flex border border-solid border-black'>

{/* content container */}
			<div className=' flex justify-center items-start flex-col w-[50%]'>
				<h3 className='text-left font-semibold text-[25px]'> Herbal health centers
				for Unani treatment </h3>
				<p className='text-[15px]'>Good health and natural wellness for all, coupled with care and compassion at an affordable price, have been the guiding principles that Hamdard has embraced and practised since its inception. A significant stride in this direction is &apos;Hamdard Wellness , &apos; dedicated to providing selfless healthcare aimed at enhancing the quality of human life.</p>

{/* button containers */}
				<div className='flex gap-[15px]'>
					<button className='border border-solid border-black p-[10px] text-[20px]'> Explore Our Centers </button>
					<button className='border border-solid border-black p-[10px] text-[20px]'> Book An Appointment </button>
				</div>

			</div>

		</div>
		
	</div>
  )
}

export default SliderComp
