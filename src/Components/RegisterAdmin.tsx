"use client"

import React, { useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUser } from "../lib/store/features/auth/authSlice"
import Link from 'next/link';
import { showToast } from '@/lib/utils/toast';

const RegisterAdmin = () => {
	const [adminDetails, setAdminDetails] = useState({
		name: "",
		email: "",
		password: "",
		code: ""
	})

	const [showPassword, setShowPassword] = useState(false);
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
	const router = useRouter();
	const dispatch = useDispatch();

	const handleRegister = async () => {
		try {
			const res = await axios({
				url: `${backendUrl}/admin/register`,
				method: "post",
				data: adminDetails
			})

			const registerResponse = res.data
			console.log("register response", registerResponse)

			if (registerResponse?.success) {
				// setting the user in redux state
				dispatch(setUser(res.data));

				// setting the user in localstorage
				// if(localStorage){
				// 	localStorage.setItem("admin", JSON.stringify(res.data))
				// }

				if (typeof window !== "undefined") {
					localStorage.setItem("admin", JSON.stringify(res.data));
				  }

				// redirect to the home page
				router.push("/")
				showToast("Resgister Successfully " , true)
			}

			console.log("response is ", res);
		} catch (err) {
			console.log("error in handle register ", err);
		}
	}

	return (
		<div className='flex w-[100vw] h-[80vh] mt-[20vh] justify-center items-center p-2'>

			<div className='md:w-[40%] w-[80%] h-max flex flex-col justify-center items-center gap-[10px] p-4 shadow-lg rounded-lg'>

				<h2 className='text-center w-full md:text-[35px] font-semibold'>Register</h2>

				<div className='flex flex-col justify-center items-start gap-[20px] p-2 w-[80%]'>

					{/* for name */}
					<div className='flex flex-col justify-center items-start w-full'>
						<span>Name</span>
						<input onChange={(e) => setAdminDetails(prev => ({ ...prev, name: e.target.value }))} className='focus:bg-gray-50  transition-all duration-400 focus:shadow-md focus:border-[1px] focus:border-gray-400 box-border outline-none w-full border-[1px] border-solid border-gray-200 rounded-lg p-[10px]' type="text" placeholder='enter your name' />
					</div>

					{/* for email */}
					<div className='flex flex-col justify-center items-start w-full'>
						<span>Email</span>
						<input onChange={(e) => setAdminDetails(prev => ({ ...prev, email: e.target.value }))} className='focus:bg-gray-50  transition-all duration-400 focus:shadow-md focus:border-[1px] focus:border-gray-400 box-border outline-none w-full border-[1px] border-solid border-gray-200 rounded-lg p-[10px]' type="text" placeholder='enter your email' />
					</div>

					{/* for password */}
					<div className='flex flex-col justify-center items-start w-full'>
						<span>Password</span>
						<div className='w-full relative flex justify-center items-center'>
							<input onChange={(e) => setAdminDetails(prev => ({ ...prev, password: e.target.value }))} className='focus:bg-gray-50  transition-all duration-400 focus:shadow-md focus:border-[1px] focus:border-gray-400 box-border w-full outline-none border-[1px] border-solid border-gray-200 rounded-lg p-[10px]' type={showPassword ? "text" : "password"} placeholder='enter password' />
							<span onClick={() => setShowPassword(prev => !prev)} className='absolute right-0 p-2 md:text-[50px] cursor-pointer'> {showPassword ? <FaEyeSlash size={"20px"} /> : <FaEye size={"20px"} />} </span>
						</div>
					</div>

					{/* for code */}
					<div className='flex flex-col justify-center items-start w-full'>
						<span>Code</span>
						<div className='w-full relative flex justify-center items-center'>
							<input onChange={(e) => setAdminDetails(prev => ({ ...prev, code: e.target.value }))} className='focus:bg-gray-50  transition-all duration-400 focus:shadow-md focus:border-[1px] focus:border-gray-400 box-border w-full outline-none border-[1px] border-solid border-gray-200 rounded-lg p-[10px]' type={showPassword ? "text" : "password"} placeholder='enter security code' />
							<span onClick={() => setShowPassword(prev => !prev)} className='absolute right-0 p-2 md:text-[50px] cursor-pointer'> {showPassword ? <FaEyeSlash size={"20px"} /> : <FaEye size={"20px"} />} </span>
						</div>
						<span className='text-left text-[12px] text-red-500'>* If you are the first admin , then set the code so that it will be used to create next admin</span>
					</div>

					<div className='w-full flex justify-end items-center'>
						<Link className='text-[14px] underline text-blue-500 mt-[-25px]' href={"/admin/login"}> already have an account ? </Link>
					</div>

				</div>

				<div className='w-full flex justify-center items-center'>
					<button onClick={() => handleRegister()} className='bg-[#65AAA1] md:w-[40%] rounded-md py-[10px] font-semibold md:text-[20px] text-white' > Register </button>
				</div>

			</div>

		</div>
	);
}

export default React.memo(RegisterAdmin);
