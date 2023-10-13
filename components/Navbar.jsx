"use client";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Typography, Badge, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "@/lib/redux/productSlice/productSlice";
function Navbar() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	return (
		<nav className="flex p-4 w-[100%] ">
			<Box className="flex flex-grow">
				<Typography variant="h5">Shop</Typography>
			</Box>
			<Box className="flex item-center justify-center">
				<Badge
					badgeContent={
						!!cartItems?.length
							? cartItems.reduce(
									(a, b) => ({ quantity: a.quantity + b.quantity }),
									{ quantity: 0 }
						)?.quantity
							: "0"
					}
					color="error"
				>
					<IconButton className="p-0" onClick={() => dispatch(setShowCart({showCart: true}))}>
						<ShoppingCartIcon />
					</IconButton>
				</Badge>
			</Box>
		</nav>
	);
}

export default Navbar;
