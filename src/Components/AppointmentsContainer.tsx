"use client"

import React, { useState } from 'react'
import Appointments from './Appointments'

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

const AppointmentsContainer = ({ appointments: app }: any) => {

	const [appointments, setAppointments] = useState(app)

	return (
		<div className='w-[100vw] mt-[10vh] h-[100vh] flex justify-center items-center gap-[20px]'>
			

			{/* appointemtns container */}
			<div className='md:w-[80%] h-[90%] rounded-lg bg-white flex flex-col justify-center items-center gap-[20px]'>
				{/* heading container */}
				<div className='w-full flex justify-center items-center py-[20px] px-[10px]'>
					<h2 className='md:text-[28px] font-semibold'>All the appointments</h2>
				</div>

				{/* all appointments container */}
				<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
					{appointments.length > 0 ? (
						appointments.map((a:any, index: number) => (
							<Appointments setAppointments = {setAppointments} appointment={a} key={index} />
						))
					) : (
						<div></div>
					)}
				</div>

			</div>

		</div>
	)
}

export default AppointmentsContainer
