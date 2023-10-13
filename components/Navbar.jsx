"use client";
import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { signIn, useSession, signOut } from "next-auth/react";

import 'react-toastify/dist/ReactToastify.css';
import {
	Box,
	Typography,
	Badge,
	IconButton,
	AppBar,
	Button,
	Toolbar,
	Avatar,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "@/lib/redux/productSlice/productSlice";
function Navbar() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const { data: session, status } = useSession();
	const notify = () => toast("Wow so easy!");
	return (
		<AppBar
			position="sticky"
			className="bg-white/50 backdrop-blur-sm z-10"
			sx={{ backgroundColor: "#fff" }}
		>
			<Toolbar className="flex">
				<Box className="flex grow items-center gap-2">
					<Brightness7Icon className="text-black text-[1.4rem] sm:text-[1.8rem]" />
					<Typography
						noWrap
						href="/"
						component="a"
						className="text-black mr-2 font-AROneSans font-bold text-[1.2rem] sm:text-[1.4rem]"
					>
						Gaming Sphere
					</Typography>
				</Box>
				<Box className="flex items-center justify-center gap-6">
					{session ? (
						<Avatar
							src={session?.user?.image}
							alt={session?.user?.name}
							sizes="small"
							onClick={() => signOut()}
							className="cursor-pointer"
						/>
					) : (
						<Button
							variant="text"
							className="font-semibold font-Poppins text-red text-[0.8rem] rounded-2xl transition-all"
							onClick={() => signIn("google")}
						>
							Sign in
						</Button>
					)}
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
							<ShoppingBagOutlinedIcon className="text-black" />
						</IconButton>
					</Badge>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
