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
			sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100vw", height: "100vh", backgroundColor: "#eee"}}
		>
			{width && height && (
                <Confetti width={width} height={height} />
            )}
			<Box className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-lg p-12 sm:p-16">
				<CheckCircleIcon sx={{fontSize: "5rem", color: "green"}}/>
				<Typography
					textAlign="center"
					sx={{fontSize: {xs: "1rem", sm: "1.2rem"}, fontWeight: {xs: 500, sm: 600}, width: {xs: "100%", sm: "70%"}}}
				>
					Thank you for your purchase! Your payment has been successfully
					processed.
				</Typography>
				<Typography
					component="a"
					variant="h6"
					href="/"
					sx={{
						fontSize: "1.2rem",
						fontWeight: 600,
						color: "red",
					}}
				>
					Home
				</Typography>
			</Box>
		</Container>
	);
}

export default PaymentSuccess;
