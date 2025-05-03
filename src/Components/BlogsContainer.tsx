"use client"

import React, { useEffect, useState } from 'react'
import Blogs from "./Blogs"

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

const BlogsContainer = ({ allBlogs } : any) => {

	const [blogs, setBlogs] = useState(allBlogs);
	// const[loading , setLoading] = useState(true)

	// const getAllBlogs  = async()=>{
	// 	try{
	// 		const res = await axios({
	// 			url : `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, 
	// 			method : "get"
	// 		})
	// 		setBlogs(res.data?.data)
	// 		console.log("data is " , res.data)

	// 	}catch(err){
	// 		console.log("Error in getAllBlogs " , err)
	// 	}
	// }

	// useEffect(()=>{
	// 	try{
	// 		getAllBlogs()
	// 	}catch(err){
	// 		console.log("error in blogsContainer useEffect " , err)
	// 	}finally{
	// 		setLoading(false)
	// 	}
	// },[])

	useEffect(() => {
		console.log("inside the useEffect");
		setBlogs(allBlogs)
	}, [allBlogs])

	return (
		<div>
			{blogs.length > 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px] rounded-lg'>

				{blogs.map((blog :any , index: number) => {
					return (<Blogs blog={blog} key={index} setBlogs={setBlogs} />)
				})}
			</div> : <div className='w-full h-full flex justify-center items-center flex-col gap-[5px] relative'>
				<span className='relative z-[100] md:text-[25px] font-normal'> Oop&apos;s No Blogs Created 😜</span>
				<div className=''>
					{/* <img className='absolute top-0 left-0 z-[10] rounded-lg' src="https://blog.snappymob.com/wp-content/uploads/2020/12/8-Tips-for-Designing-Empty-Placeholder-Pages-Leni-Featured.png" alt="empty-blogs" /> */}
				</div>
			</div>}
		</div>
	)
}

export default BlogsContainer
