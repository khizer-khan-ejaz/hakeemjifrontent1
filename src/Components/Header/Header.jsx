"use client"

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import axios from 'axios';
import { showToast } from '@/lib/utils/toast';
import { useDispatch } from 'react-redux';
import { setUser } from '@/lib/store/features/auth/authSlice';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Safe localStorage check that only runs client-side
    if (typeof window !== 'undefined') {
      setIsAdmin(localStorage.getItem("admin") ? true : false);
    }
  }, [pathname]);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleLogout = async () => {
    try {
      const res = await axios({
        url: `${backendUrl}/admin/logout`,
        method: "post",
        withCredentials: true
      });
      
      if (res.data?.success) {
        showToast("Logout Successfully", true);
      }

      // Safe localStorage operation
      if (typeof window !== 'undefined') {
        localStorage.removeItem("admin"); // Using removeItem instead of clear
      }
      
      setIsAdmin(false);
      dispatch(setUser(undefined));

    } catch (err) {
      console.log("Error in handleLogout", err.message);
      showToast(err.message, false);
    }
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="w-full">
      <nav className="bg-white fixed top-0 left-0 right-0 shadow-lg z-50">
        <div className="container mx-auto px-4 relative">
          {/* Mobile Brand */}
          <div className="lg:hidden text-center">
            <a href="/" className="inline-block py-4">
              <span className="text-[#65AAA1] text-xl">Medic Care</span>
              <strong className="block text-[#65AAA1]">Health Specialist</strong>
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden absolute right-4 top-4 p-2"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </button>

          {/* Navigation Links */}
          <div className={`${isNavOpen ? 'flex' : 'hidden'} lg:flex py-4 justify-center items-center`}>
            <ul className="w-full md:w-4/5 flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0">
              <li>
                <a href="/" className="text-gray-500 font-bold text-base hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-500 font-bold text-base hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-500 font-bold text-base hover:text-gray-900">
                  Gallery
                </a>
              </li>

              {/* Desktop Brand */}
              <a href="/" className="hidden lg:block text-center px-8 text-[#65AAA1] font-bold">
                <span className="text-2xl font-semibold">Dr Naushad Ali Rana</span>
                <strong className="block font-bold text-gray-500 -mt-2">Health Specialist</strong>
              </a>

              <li>
                <a href="/blogs" className="text-gray-500 font-bold text-base hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="/books" className="text-gray-500 font-bold text-base hover:text-gray-900">
                  Books
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-500 font-bold text-base hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* login and logout container */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
            {!isAdmin ? (
              <MdAccountCircle 
                onClick={() => router.push("/admin/login")} 
                className="cursor-pointer" 
                size={25} 
              />
            ) : (
              <IoMdLogOut 
                onClick={handleLogout} 
                className="cursor-pointer" 
                size={25} 
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;