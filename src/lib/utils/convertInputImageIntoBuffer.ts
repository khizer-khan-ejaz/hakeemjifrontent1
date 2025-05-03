/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */


export const convertImage = ( file : any ,  setImagePreview : any)=>{
	try{
		if(!file) return;

		const reader = new FileReader();
		reader.onloadend = ()=>{
			setImagePreview(reader.result)
		}
		reader.readAsDataURL(file)
	}catch(err : any){
		console.log("Error on converting the image into buffer data " , err.message);
	}
}