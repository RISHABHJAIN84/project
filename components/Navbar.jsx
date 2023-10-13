"use client";
import React from "react";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
	Box,
	Typography,
	Badge,
	IconButton,
	AppBar,
	Container,
	Toolbar,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "@/lib/redux/productSlice/productSlice";
function Navbar() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	return (
		<AppBar position="sticky" className="bg-white/50 backdrop-blur-sm z-10" >
			<Toolbar className="flex">
				<Box className="flex grow items-center gap-2">
					<Brightness7Icon className="text-black text-[1.4rem] sm:text-[1.8rem]"/>
					<Typography
						noWrap
						href="/"
						component="a"
						className="text-black mr-2 font-AROneSans font-bold text-[1.2rem] sm:text-[1.4rem]"
					>
						Gaming Sphere
					</Typography>
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
						<IconButton
							className="p-0"
							onClick={() => dispatch(setShowCart({ showCart: true }))}
						>
							<ShoppingBagOutlinedIcon className="text-black"/>
						</IconButton>
					</Badge>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;