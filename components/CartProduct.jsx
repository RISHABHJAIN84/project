import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { sanityImgUrl } from "@/sanity/lib/sanityImgUrl";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import {
	addToCart,
	removeFromCart,
} from "@/lib/redux/productSlice/productSlice";
function CartProduct({ image, name, price, quantity, slug }) {
	const dispatch = useDispatch();
	return (
		<Box className="flex items-center">
			<Image src={sanityImgUrl(image)} width={100} height={100} />
			<Box className="flex flex-col justify-around pl-4">
				<Typography className="font-semibold font-Poppins text-[0.7rem] sm:text-[0.9rem]">{name}</Typography>
				<Box className="flex items-end">
					<CurrencyRupeeIcon className="w-3" />
					<Typography className="font-semibold font-Poppins text-[0.7rem] sm:text-sm">
						{price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
					</Typography>
				</Box>
				<Box className="flex items-center">
					<IconButton onClick={() => dispatch(removeFromCart({ slug }))}>
						<RemoveIcon className="text-sm sm:text-lg" />
					</IconButton>
					<Typography className="text-sm">{quantity}</Typography>
					<IconButton
						onClick={() =>
							dispatch(
								addToCart({ item: { image, name, price, quantity, slug } })
							)
						}
					>
						<AddIcon className="text-sm sm:text-lg" />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
}

export default CartProduct;
