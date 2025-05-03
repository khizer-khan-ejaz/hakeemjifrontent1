// app/admin/createblogs/CreateBlogs.tsx
"use client";

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

import AdminCreateBlogs from '@/components/AdminSection/AdminCreateBlogs'
import axios from 'axios'
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from 'react'

const CreateBlogs = () => {
	const [blogData, setBlogData] = useState();
	const [isLoaded, setIsLoaded] = useState(false);

	const searchParams = useSearchParams();
	const editBlog = searchParams.get("edit");
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	const getBlogBySlug = async () => {
		try {
			const res = await axios.get(`${backendUrl}/blogs/${editBlog}`);
			setBlogData({ ...res.data?.data, isEdit: true });
			setIsLoaded(true);
		} catch (err: any) {
			console.error("Error fetching blog:", err.message);
		}
	};

	useEffect(() => {
		getBlogBySlug();
	}, []);

	return (
		<div>
			{isLoaded && <AdminCreateBlogs prevBlog={blogData} />}
		</div>
	);
};

export default CreateBlogs;
