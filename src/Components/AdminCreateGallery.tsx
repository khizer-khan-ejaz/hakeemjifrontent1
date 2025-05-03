"use client"

import { authorityDenied, checkAuthority } from '@/lib/utils/checkAdmin';
import { convertImage } from '@/lib/utils/convertInputImageIntoBuffer';
import { showToast } from '@/lib/utils/toast';
import axios from 'axios';
// import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

const AdminCreateGallery = ({setAllGalleries , setIsCreateGalleryPopupOpen} : {setAllGalleries : any , setIsCreateGalleryPopupOpen : any}) => {

	const [des, setDes] = useState<string>("");
	const [imagePreview, setImagePreview] = useState<string>("")
	const inputRef = useRef<HTMLInputElement>(null);
	const[image , setImage] = useState()

	const handleInputChange = (e:any)=>{
		const  Image = e.target.files[0];
		if(!Image) return;
		setImage(Image)
		convertImage(Image , setImagePreview);
	}

	const handleCancelImage = ()=>{
		setImagePreview("");
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	}

	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
	// const router = useRouter();

	const hanldeSubmit = async()=>{

		const isAuthority = checkAuthority();
		if(!isAuthority){
			authorityDenied();
			return
		}

		try{
			const formData = new FormData();

			if(image){
				formData.append("file" , image)
			}

			formData.append("des" , des);

			const res = await axios({
				url : `${backendUrl}/gallery/upload`,
				method :"post",
				data : formData
			})
			const galleryResponse = res.data;
			console.log("Gallery response is " , galleryResponse)
			// router.push("/admin/gallery")
			setIsCreateGalleryPopupOpen(false)
			setAllGalleries((prev:any)=>{
				console.log("prev is " , prev)
				return [...prev , galleryResponse?.data]
			})

			showToast("Gallery Created Successfully", true)

		}catch(err:any){
			console.log("Error in handleSubmit " , err)
			showToast(err.message , false)
		}
	}

  return (
	<div className='w-[90%] md:w-[50%] h-[95%] md:h-[70%] shadow-lg rounded-lg overflow-scroll scrollbar-hidden flex justify-start items-center flex-col px-[5px] py-[10px] gap-[20px] relative bg-white z-[3000]'>

				<h2 className='font-semibold md:text-[28px]'> Admin , Create the Gallery</h2>

				{/* container for cancel button to close the popup */}
				<div onClick={()=> setIsCreateGalleryPopupOpen(false)} className='absolute top-0 right-0 cursor-pointer'>
					<MdCancel size={"25px"} />
				</div>

				<div className='md:w-[70%] w-[90%] flex gap-[5px] items-center justify-between mt-[10px]'>
					<input onChange={(e)=>handleInputChange(e)} ref={inputRef} hidden type="file" placeholder='enter description' />
					<span>Enter the Cover Image for Gallery</span>
					<CiImageOn onClick={()=> inputRef.current?.click()} className='cursor-pointer' size={"22px"} />
				</div>

				{/* preview Image container */}
				{imagePreview && <div className='md:w-[70%] w-[90%] flex items-center justify-start relative gap-[5px]'>
					
					<div className='w-[95%] h-full'>
					<img className='w-full h-full rounded-lg object-contain' src={imagePreview} alt="preview-image" />
					</div>

					{/* cancel button container */}
					<div onClick={handleCancelImage} className='absolute cursor-pointer flex justify-center items-center flex-1 right-0 top-0'>
						<MdCancel size={"20px"} />
					</div>

				</div>}

				{/* description container */}
				<div className='md:w-[70%] w-[90%]'>
					<span>Enter the Description for this Image</span>
					<textarea value={des} onChange={(e)=> setDes(e.target.value)} className='w-full border-[1px] border-solid border-gray-200 bg-gray-50 px-[5px] py-[10px] rounded-lg'  placeholder='enter description' />
				</div>

				{/* upload button container */}
				<div className='md:w-[70%] w-[90%] flex justify-center items-center'>
					<button onClick={hanldeSubmit} className='px-[5px] py-[10px] bg-[#65AAA1] text-white rounded-lg w-full md:w-[50%]'>Upload</button>
				</div>


			</div>
  )
}

export default AdminCreateGallery
