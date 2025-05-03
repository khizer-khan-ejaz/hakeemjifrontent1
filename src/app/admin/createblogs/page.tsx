// app/admin/createblogs/page.tsx
import React, { Suspense } from "react";
import CreateBlogs from "./CreateBlogs";

export default function Page() {
	return (
		<Suspense fallback={<div>Loading blog editor...</div>}>
			<CreateBlogs />
		</Suspense>
	);
}
