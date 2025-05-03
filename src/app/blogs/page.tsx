// import BlogsContainer from '@/Components/BlogsContainer'
import BlogsContainerForFetcingBlogsSSR from '@/Components/BlogsContainerForFetcingBlogsSSR'
// import React, { useEffect, useState } from 'react'

// const AdminCreateBlog = ()=>{
// 	return(
// 		<div className='w-full flex justify-center items-center'>
// 			<div className='w-[80%] flex items-center justify-end'>
// 				<button> Create Blog +  </button>
// 			</div>
// 		</div>
// 	)
// }

const BlogPage = () => {


  return (
	<div className='w-[100vw] mt-[10vh] h-[100vh] flex flex-col justify-center items-center'>

		{/* {adminUser && <AdminCreateBlog/>} */}

		<div className='w-[95%] md:w-[80%] h-[90%] md:h-[80%] p-[5px] md:p-[10px]'>
			{/* heading container */}
			<div className='w-full flex justify-center items-center py-[15px]'>
				<h2 className='font-semibold md:text-[28px]'>Blogs Heading</h2>
			</div>

			{/* <BlogsContainer/> */}
			<BlogsContainerForFetcingBlogsSSR/>
		</div>
	</div>
  )
}

export default BlogPage

