"use client"

import { showToast } from "./toast";

export const checkAuthority = () => {
	return Boolean(localStorage?.getItem("admin"));
  };
  
export const authorityDenied = ()=>{
	showToast("You don't have authority to perform this task " , false)
}