import React from 'react';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Cart from '@/components/Cart';
import { bannerQuery } from '@/sanity/lib/query';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function Home() {
	const banners = await sanityFetch({ query: bannerQuery });
	return (
		<div className='flex flex-col items-center bg-[#eee] pb-10'>
			<Cart />
			<Navbar />
			<Banner banners={banners}/>
			<Products />
			
		</div>
	);
}
