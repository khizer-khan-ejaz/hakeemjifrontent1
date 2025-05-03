"use client"

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'
import AdminCreateGallery from './AdminCreateGallery'

const GalleryContainer = ({ galleries } : any) => {

	const [allGalleries, setAllGalleries] = useState(galleries)
	// const isAdmin = localStorage?.getItem("admin") || undefined
	const[isAdmin , setIsAdmin] = useState<any>()
	const [isCreateGalleryPopupOpen, setIsCreateGalleryPopupOpen] = useState(false);

	useEffect(() => {
		console.log("inside the use effect ")
		setAllGalleries(galleries)
		setIsAdmin(localStorage?.getItem("admin") || undefined)
	}, [galleries])


	return (
		<div className='w-full h-[80vh] mt-auto flex justify-center items-center flex-col'>


			{/* div for gallert creating popup */}
			{isCreateGalleryPopupOpen && <div className='w-full h-full fixed top-0 left-0 right-0 z-[2000] flex justify-center items-center'>
				{/* div for overlay */}
				<div className='fixed top-0 w-full h-full bg-black opacity-50 z-[2500]' />
				<AdminCreateGallery setAllGalleries={setAllGalleries} setIsCreateGalleryPopupOpen={setIsCreateGalleryPopupOpen} />
			</div>}


			<div className='w-[90%] md:w-[80%] flex items-center justify-center relative py-[10px] px-[5px]'>
				{/* heading container */}
				<div className='w-full flex  md:justify-center justify-start items-center px-[5px] py-[10px]'>
					<h2 className='md:text-[28px] text-[22px] font-semibold'>All Galleries</h2>
				</div>

				{/* create gallery container */}
				{isAdmin && <div className='absolute right-0'>
					<button onClick={() => setIsCreateGalleryPopupOpen(true)} className='bg-[#65AAA1] text-white md:text-[18px] px-[8px] py-[8px] rounded-lg font-[500] cursor-pointer'> Create Gallery </button>
				</div>}

			</div>
			{/* main gallery container */}

			<div className={`md:w-[80%] w-[90%] h-[90%] grid  md:gap-[10px] ${allGalleries.length == 0 ? "md:grid-cols-1" : "md:grid-cols-3"} flex-1 overflow-scroll scrollbar-hidden`}>
				{/* {allGalleries.length > 0 ? allGalleries.map((g , index : number)=>{
				return <Gallery setAllGalleries={setAllGalleries} key={index} gallery={g} />
			}) : <div className='w-full h-full flex justify-center items-center border border-solid border-black'>
				<h2 className='md:text-[35px] font-semibold text-center'>No Galleries Created Yet</h2>
				</div>} */}

				{allGalleries.length > 0 ? allGalleries.map((g:any, index: number) => {
					return <Gallery setAllGalleries={setAllGalleries} key={index} gallery={g} />
				}) : <div className='w-full h-full flex justify-center items-center'>
					<h2 className='md:text-[35px] font-semibold text-center'>No Galleries Created Yet</h2>
				</div>}
			</div>

		</div>
	)
}

export default GalleryContainer
