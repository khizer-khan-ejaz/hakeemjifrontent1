"use client"

import { authorityDenied, checkAuthority } from '@/lib/utils/checkAdmin';
import { formatDate } from '@/lib/utils/formatDate'
import { showToast } from '@/lib/utils/toast';
import axios from 'axios';
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

const Appointments = ({ setAppointments, appointment }:any) => {

	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
	const [clickedOnDelete, setClickedOnDelete] = useState<boolean>(false);


	const handleDelete = async (e:any) => {
		const isAuthority = checkAuthority();
		if(!isAuthority){
			authorityDenied();
			return
		}
		e.stopPropagation()
		try {
			const res = await axios({
				url: `${backendUrl}/contact/delete/${appointment._id}`,
				method: "delete"
			})
			const deleteResponse = res.data;
			if(deleteResponse.success){
				showToast(deleteResponse.message , true)
			}

			// now remove this appointment from the state 
			setAppointments((prev:any) => {
				return prev.filter((p:any) => p._id != appointment._id)
			})
			showToast("Appointment deleted" , true)

		} catch (err:any) {
			console.log("Error in handleDelete ", err);
			showToast(err.message , false)
		}
	}

	return (
		<div className='max-h-[300px] rounded-lg shadow-xl flex justify-center items-start bg-[#65AAA1] relative'>

			{/* delete button container */}
			<div className='absolute right-0 top-0'>
				<MdDelete onClick={() => setClickedOnDelete(true)} className='text-white cursor-pointer' size={"20px"} />
			</div>

			{/* contain for confirmation delete popup */}
			{/* conformation container */}
			{clickedOnDelete && <div className='absolute z-[1000] w-[150px] top-1 right-1  rounded-lg bg-white text-black px-[5px] py-[8px]'>
				<button onClick={(e)=>handleDelete(e)} className='text-white bg-red-400 px-[7px] py-[5px] rounded-lg'>Delete</button>
				<button onClick={(e)=> [e.stopPropagation() , setClickedOnDelete(false)]} className='absolute top-0 right-0'><MdCancel className='text-black' size={"20px"} /></button>
			</div>}

			{/* container */}
			<div className='flex h-full flex-col justify-center items-start py-[10px] px-[10px] md:w-[80%] overflow-scroll scrollbar-hidden bg-[#65AAA1] text-white font-[500] md:text-[17px]'>
				<span className='flex-1'> <span>Name :  </span> {appointment.name}</span>
				<span className='flex-1'> <span>Email : </span> {appointment.email}</span>
				<span className='flex-1'> <span>Phone : </span> {appointment.phone}</span>
				<span className='flex-1'> <span>Time : </span> {appointment.time}</span>
				<span className='flex-1'> <span>Date : </span> {formatDate(appointment.date)} </span>
				<span className='flex-1'> <span>Appointement Location: </span>  {appointment.clinicAddress}</span>
				{appointment.message && <span className='flex-1'>Message : {appointment.message}</span>}
			</div>
		</div>
	)
}

export default Appointments
