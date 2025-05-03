"use client"

import React, { useEffect, useState } from 'react'
import { formatDate } from "@/lib/utils/formatDate"
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter, usePathname } from 'next/navigation';
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';
import { authorityDenied, checkAuthority } from '@/lib/utils/checkAdmin';
import { showToast } from '@/lib/utils/toast';

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

const Blogs = ({ blog , setBlogs } : { blog : any , setBlogs : any }) => {

	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	const router = useRouter();
	const pathname = usePathname();

	const handleBlogClick = async (blog: any) => {
		try {
			router.push(`${pathname}/${blog.slug}`)
		} catch (err) {
			console.log("Error in handleBlogClick ", err);
		}
	}

	const handleDelteBlog = async(e:any)=>{
		const isAuthority = checkAuthority();
		if(!isAuthority){
			authorityDenied();
			return
		}
		try{
			e.stopPropagation();
			const res = await axios({
				url : `${backendUrl}/blogs/delete`,
				method :"post",
				data : {_id : blog._id}
			})

			const response = res.data;
			if(response.success){
				showToast(response.message , true)
			}
			// now After deleting the blog , now we have to update the state
			setBlogs((prev:any)=>{
				return prev.filter((p:any)=> p._id != blog._id)
			})

		}catch(err){
			console.log("Error in handleDeleteBlog " , err);
		}
	}

	// const isAdmin = localStorage?.getItem("admin") || undefined
	const[isAdmin , setIsAdmin] = useState<any>()

	useEffect(()=>{
		setIsAdmin(localStorage?.getItem("admin") || undefined)
	},[])

	return (
		<div onClick={() => handleBlogClick(blog)} className='w-full flex flex-col rounded-md  p-[5px] cursor-pointer transition-all duration-200 shadow-xl'>

			{/* blogs image container */}
			<div className='w-full rounded-md h-auto md:h-[200px]'>
				<img src={blog.url} alt="blog-cover-image" className='w-full h-full object-cover rounded-t-lg' />
			</div>

			{/* details about blogs */}
			<div className='w-full'>
				<span className='font-semibold text-gray-600'>Publish date : {formatDate(blog.publishDate)}</span>
			</div>

			{/* blogs content */}
			<div className='w-full py-[10px] px-[5px] flex-1 flex flex-col'>
				<div className='flex flex-col gap-[10px] flex-1 '> <h1 className='text-start w-full md:text-[25px]'>{blog.title}</h1>
					<div className='w-full flex flex-col gap-[8px] flex-1'>
						<p className='md:text-[15px] text-[12px] line-clamp-3'> {blog.des} </p>

						<div className='w-full flex flex-col gap-2 mt-auto'>
						<button className='flex  py-[10px] px-[5px] w-full md:w-[45%] md:hover:w-[65%] transition-all duration-200 ease-in-out cursor-pointer text-nowrap font-semibold gap-[10px] justify-center items-center bg-[#94DEA5] rounded-lg'>  <span className='text-white'>Read more</span> <span className='text-white ml-auto'><FaLongArrowAltRight size={"25px"} /></span> </button>
						{isAdmin && <button onClick={(e)=>handleDelteBlog(e)} className='flex  py-[10px] px-[5px] w-full md:w-[45%] transition-all duration-200 ease-in-out cursor-pointer text-nowrap font-semibold gap-[10px] justify-center items-center bg-[#F7374F] rounded-lg'>  <span className='text-white'>Delete Blog</span> <span className='text-white ml-auto'><MdDeleteOutline size={"25px"} /></span> </button>}
						</div>
						
					</div>
				</div>
			</div>

		</div>
	)
}

export default React.memo(Blogs)
