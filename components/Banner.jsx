import React from "react";
import { sanityImgUrl } from "@/sanity/lib/sanityImgUrl";
import { Box } from "@mui/material";

function Banner({ banners }) {
	return (
		<Box className="w-[90vw] sm:w-[80vw] overflow-hidden rounded-2xl m-4">
			<Box className={`w-[100%] flex animate-slider`}>
				{banners?.map((banner) => {
					return (
						<img
							src={sanityImgUrl(banner.image)}
							alt={banner.slug}
							className="w-[100%]"
						/>
					);
				})}
			</Box>
		</Box>
	);
}

export default Banner;
