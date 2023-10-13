"use client";
import React, { useEffect, useState } from "react";
import {
	Grid,
	Box,
	Typography,
	Rating,
	Button,
	IconButton,
} from "@mui/material";
import Image from "next/image";
import { sanityImgUrl } from "@/sanity/lib/sanityImgUrl";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useDispatch, useSelector } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
	addToCart,
	removeFromCart,
} from "@/lib/redux/productSlice/productSlice";

function Product({ image, name, price, rating, slug }) {
	const IMAGE_WIDTH = 200;
	const IMAGE_HEIGHT = 200;
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);
	const [cartItem, setCartItem] = useState(null);
	useEffect(() => {
		setCartItem(
			cartItems.find((item) => item.item.slug.current === slug.current)
		);
	}, [cartItems]);
	return (
		<Grid item xs={6} md={4} lg={2.4}>
			<Box
				className="flex flex-col h-full justify-between p-4 rounded-2xl cursor-pointer md:hover:scale-[110%] transition-all bg-white"
				sx={{ border: "1px #ccc solid" }}
			>
				<Image
					src={sanityImgUrl(image)}
					width={IMAGE_WIDTH}
					height={IMAGE_HEIGHT}
				/>
				<Typography
					variant="h4"
					className="text-[0.7rem] sm:text-[0.8rem] font-medium font-Poppins mt-6"
				>
					{name.length > 50 ? name.slice(0, 50) + "..." : name}
				</Typography>
				<Box className="flex items-end">
					<CurrencyRupeeIcon className="w-3" />
					<Typography
						variant="h4"
						className="font-bold font-Poppins text-[0.8rem] sm:text-[1rem]"
					>
						{price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
					</Typography>
				</Box>
				<Rating defaultValue={rating} precision={0.5} readOnly className="text-sm sm:text-base" />
				{!cartItem ? (
					<Button
						variant="contained"
						className="mt-2 rounded-2xl text-[0.5rem] sm:text-[0.8rem] px-0 py-2  color-[#fff] bg-red hover:bg-[#fff] hover:text-red transition-all w-[70%]"
						onClick={() =>
							dispatch(
								addToCart({ item: { name, price, image, rating, slug } })
							)
						}
					>
						Add to cart
					</Button>
				) : (
					<Box className="flex items-center">
						<IconButton
							
							onClick={() =>
								dispatch(removeFromCart({ slug: cartItem.item.slug }))
							}
						>
							<RemoveIcon className="text-sm sm:text-lg"/>
						</IconButton>
						<Typography className="text-sm">{cartItem?.quantity}</Typography>
						<IconButton
							onClick={() => dispatch(addToCart({ item: cartItem.item }))}
						>
							<AddIcon className="text-sm sm:text-lg"/>
						</IconButton>
					</Box>
				)}
			</Box>
		</Grid>
	);
}

export default Product;
