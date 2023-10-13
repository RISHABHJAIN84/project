"use client";
import React, {useState} from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { setShowCart } from "@/lib/redux/productSlice/productSlice";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CartProduct from "@/components/CartProduct";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import getStripe from "@/lib/stripe/getStripe";

function Cart() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const { showCart } = useSelector((state) => state.cart);
	const [loading, setLoading] = useState(false);
	const handleCheckout = async () => {
		try {
			setLoading(true);
			const stripe = await getStripe();
			const response = await fetch("/api/stripe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ cartItems }),
			});
			const { session } = await response.json();
			if (session) {
				setLoading(false);
				stripe.redirectToCheckout({ sessionId: session.id });
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			alert("Something went wrong");
		}
	};
	return showCart ? (
		<Box className="w-full bg-black/50 fixed right-0 top-0 z-20 transition-all">
			<Box className="w-[100vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] h-[100vh] relative float-right opacity-100 py-16 px-4 bg-white flex flex-col items-center z-20">
				<Box className="flex items-center gap-2">
					<ArrowBackIosNewIcon
						onClick={() => dispatch(setShowCart({ showCart: false }))}
						className="cursor-pointer inline-block text-[1rem]"
					/>
					<Typography className="font-semibold font-Poppins">
						Your Cart{" "}
						<span className="text-red">
							(
							{!!cartItems?.length
								? cartItems.reduce(
										(a, b) => ({ quantity: a.quantity + b.quantity }),
										{ quantity: 0 }
								)?.quantity
								: 0}{" "}
							items)
						</span>
					</Typography>
				</Box>
				{!cartItems?.length ? (
					<Box className="flex flex-col items-center gap-4 mt-10">
						<LocalMallIcon className="text-[10rem]" />
						<Typography className="font-semibold text-[1.2rem] font-Poppins">
							Your Shopping bag in empty
						</Typography>
						<Button
							variant="contained"
							className="bg-red hover:bg-red hover:scale-[110%] transition-all rounded-xl font-semibold"
							onClick={() => dispatch(setShowCart({ showCart: false }))}
						>
							Continue Shopping
						</Button>
					</Box>
				) : (
					<Box className="flex flex-col mt-8 justify-between h-[100%]">
						<Box className="flex h-[80%] overflow-y-scroll flex-col p-4 gap-8 w-[100%]">
							{cartItems.map(({ item, quantity }) => {
								return (
									<CartProduct
										key={item.slug}
										image={item.image}
										name={item.name}
										price={item.price}
										quantity={quantity}
										slug={item.slug}
									/>
								);
							})}
						</Box>
						<Box className="flex flex-col h-[20%] justify-end gap-4 p-4">
							<Box className="flex justify-between">
								<Typography className="font-Poppins font-semibold text-base">
									Subtotal:
								</Typography>
								<Box className="flex items-end">
									<CurrencyRupeeIcon className="w-3" />
									<Typography className="font-Poppins font-semibold text-base">
										{cartItems
											.reduce((a, b) => a + b.item.price * b.quantity, 0)
											.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
									</Typography>
								</Box>
							</Box>
							<Button
								variant="contained"
								className="bg-red hover:bg-red hover:scale-[110%] transition-all rounded-xl font-semibold font-Poppins"
								onClick={handleCheckout}
							>
								{
								loading ? <CircularProgress className="text-white" size={20} /> :
								"Proceed to Checkout"}
							</Button>
						</Box>
					</Box>
				)}
			</Box>
		</Box>
	) : (
		<></>
	);
}

export default Cart;
