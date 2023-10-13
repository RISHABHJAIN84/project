"use client";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Container, Typography } from "@mui/material";

function PaymentFailed() {
	return (
		<Container
			maxWidth={false}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100vw",
				height: "100vh",
				backgroundColor: "#eee",
			}}
		>
			<Box className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-lg p-12 sm:p-16">
				<CancelIcon sx={{ fontSize: "5rem", color: "red" }} />
				<Typography
					sx={{
						fontSize: { xs: "1rem", sm: "1.2rem" },
						fontWeight: { xs: 500, sm: 600 },
						width: { xs: "100%", sm: "70%" },
					}}
					textAlign="center"
				>
					We're sorry, but your payment could not be processed successfully.
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

export default PaymentFailed;
