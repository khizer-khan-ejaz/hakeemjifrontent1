"use client"

import { authorityDenied, checkAuthority } from '@/lib/utils/checkAdmin';
import { showToast } from '@/lib/utils/toast';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdCancel } from "react-icons/md";

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

const Gallery = ({ setAllGalleries, gallery } : { setAllGalleries : any , gallery : any }) => {

	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	const handleDeleteGallery = async (e:any) => {

		const isAuthority = checkAuthority();
		if(!isAuthority){
			authorityDenied();
			return
		}

		try {
			e.stopPropagation();
			 await axios({
				url: `${backendUrl}/gallery/delete/${gallery._id}`,
				method: "delete"
			})
			setAllGalleries((prev:any) => {
				return prev.filter((p:any) => {
					return p._id != gallery._id
				})
			})
			showToast("Gallery deleted" , true)
		} catch (err:any) {
			console.log("Error in handleDeleteGallery ", err)
			showToast(err.message , false)
		}
	}

	const[isAdmin , setIsAdmin] = useState<any>()

	useEffect(()=>{
		setIsAdmin(localStorage?.getItem("admin") ? true : false)
	},[])



	return (
		<div className="max-h-[300px] h-full relative rounded-lg shadow-xl overflow-hidden">

			{/* Gallery Image Container */}
			<div className="h-full w-full">
				<img className="object-cover h-full w-full rounded-lg" src={gallery.galleryImageUrl} alt="gallery-image" />
			</div>

			{/* Overlay covering only the bottom */}
			<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black/70"></div>

			{/* Description Container */}
			<div className="absolute bottom-4 left-4 right-4 text-white md:text-[25px] text-[18px] font-semibold  z-10 overflow-auto scrollbar-hidden">
				{gallery.des}
			</div>

			{/* delete button container */}
			{isAdmin && <div onClick={(e) => handleDeleteGallery(e)} className='absolute top-0 right-[4px] cursor-pointer z-[200] bg-black rounded-full'>
				<MdCancel size={"20px"} className='text-white' />
			</div>}

		</div>
	);
};


export default Gallery;