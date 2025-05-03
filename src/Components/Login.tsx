"use client"

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { setUser } from "../lib/store/features/auth/authSlice"
import { useRouter } from "next/navigation"
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import Link from 'next/link'
import { showToast } from '@/lib/utils/toast'

const Login = () => {

	const [email, setEmail] = useState<string>("")
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
	const [password, setPassword] = useState<string>("")
	const dispatch = useDispatch();
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);


	const handleLogin = async () => {
		try {
			const res = await axios({
				url: `${backendUrl}/admin/login`,
				method: "post",
				data: { email, password },
				withCredentials: true
			})
			const loginResponse = res.data;
			if (loginResponse.success) {
				// setting the value of user in redux variable
				dispatch(setUser(loginResponse.data))

				// now storing the admin user in local storage
				// if(localStorage) localStorage?.setItem("admin", JSON.stringify(loginResponse.data))

					if (typeof window !== 'undefined') {
						localStorage.setItem("admin", JSON.stringify(loginResponse.data));
					  }

				// clearing the email and password
				setEmail('');
				setPassword('');

				// now redirecting the user to home page
				router.push("/")
				showToast("Login Successfully" , true)

			} else {
				showToast("wrong email or password" , false)
				// alert("wrong email or password")
			}


		} catch (err: any) {
			console.log("error in handleLogin ", err.message)
		}
	}

	// const handleForgetPassword = async () => {
	// }

	// const handleChangeSecretCode = async()=>{
	// }

	return (
		<div className='w-[100vw] h-[100vh] flex justify-center items-center p-2'>

			<div className='md:w-[40%] w-[80%] h-max flex flex-col justify-center items-center gap-[10px] p-4 border-[1px] shadow-lg rounded-md'>

				<h2 className='text-center w-full md:text-[35px] font-semibold'>Login</h2>

				<div className='flex flex-col justify-center items-start gap-[20px] p-2 w-[80%]'>

					<div className='flex flex-col justify-center items-start w-full'>
						<span>Email</span>
						<input onChange={(e) => setEmail(e.target.value)} className='focus:bg-gray-50  transition-all duration-400 focus:shadow-md focus:border-[1px] focus:border-gray-400 box-border outline-none w-full border-[1px] border-solid border-gray-200 rounded-lg p-[10px]' type="text" placeholder='enter your email' />
					</div>

					<div className='flex flex-col justify-center items-start w-full'>
						<span>Password</span>
						<div className='w-full relative flex justify-center items-center'>
							<input onChange={(e) => setPassword(e.target.value)} className='focus:bg-gray-50  transition-all duration-400 focus:shadow-md focus:border-[1px] focus:border-gray-400 box-border w-full outline-none border-[1px] border-solid border-gray-200 rounded-lg p-[10px]' type={showPassword ? "text" : "password"} placeholder='enter password' />
							<span onClick={() => setShowPassword(prev => !prev)} className='absolute right-0 p-2 md:text-[50px] cursor-pointer'> {showPassword ? <FaEyeSlash size={"20px"} /> : <FaEye size={"20px"} />} </span>
						</div>
						<div className='w-full flex'>
							<Link href={"/admin/register"} className='no-select text-blue-500 text-[14px] underline ml-auto'>don&apos;t have account ? </Link>
						</div>
					</div>
				</div>

				<div className='w-full flex justify-center items-center'>
					<button onClick={handleLogin} className='bg-[#65AAA1] md:w-[40%] rounded-md py-[10px] font-semibold md:text-[20px] text-white' > Login </button>
				</div>

			</div>

		</div>
	)
}

export default React.memo(Login)
