import FetchGallerySSR from '@/Components/FetchGallerySSR'
import React from 'react'

const Gallery = () => {
  return (
	<div className='w-[100vw] h-[100vh] flex justify-center items-center'>
		<FetchGallerySSR/>
	</div>
  )
}

export default Gallery
