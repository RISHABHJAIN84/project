"use client"
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Confetti from 'react-confetti'
import useDimensions from "@/lib/useDimensions";
function PaymentSuccess() {
    const { width, height } = useDimensions();
    console.log(width, height)
	return (
		<Container
			maxWidth={false}
			className="w-[100vw] h-[100vh] bg-[#eee] flex items-center justify-center"
		>
			{width && height && (
                <Confetti width={width} height={height} />
            )}
			<Box className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-lg p-12 sm:p-16">
				<CheckCircleIcon className="text-[5rem] text-green" />
				<Typography
					className="font-semibold font-Poppins sm:text-[1.2rem] w-[100%] sm:w-[70%]"
					textAlign="center"
				>
					Thank you for your purchase! Your payment has been successfully
					processed.
				</Typography>
				<Typography
					component="a"
					variant="h6"
					href="/"
					className="font-semibold font-Poppins text-red text-[1.2rem] rounded-2xl transition-all"
				>
					Home
				</Typography>
			</Box>
		</Container>
	);
}

export default PaymentSuccess;
