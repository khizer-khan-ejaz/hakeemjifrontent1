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
 // Add this CSS file to your project

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      setIsAdmin(!!localStorage.getItem("admin"));
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

      if (typeof window !== 'undefined') {
        localStorage.removeItem("admin");
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
    <header className="header">
      <nav className="nav">
        <div className="container">
          {/* Mobile Brand */}
          <div className="mobile-brand">
            <a href="/" className="brand-link">
              <span className="brand-text">Medic Care</span>
              <strong className="brand-subtext">Health Specialist</strong>
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            className="hamburger"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Navigation Links */}
          <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <ul className="nav-menu">
              <li>
                <a href="/" className="nav-item">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="nav-item">
                  About
                </a>
              </li>
              <li>
                <a href="/gallery" className="nav-item">
                  Gallery
                </a>
              </li>

              {/* Desktop Brand */}
              <a href="/" className="desktop-brand">
                <span className="desktop-brand-text">Dr Naushad Ali Rana</span>
                <strong className="desktop-brand-subtext">Health Specialist</strong>
              </a>

              <li>
                <a href="/blogs" className="nav-item">
                  Blog
                </a>
              </li>
              <li>
                <a href="/books" className="nav-item">
                  Books
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-item">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* login and logout container */}
          <div className="auth-container">
            {!isAdmin ? (
              <MdAccountCircle 
                onClick={() => router.push("/admin/login")} 
                className="auth-icon" 
                size={25} 
              />
            ) : (
              <IoMdLogOut 
                onClick={handleLogout} 
                className="auth-icon" 
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