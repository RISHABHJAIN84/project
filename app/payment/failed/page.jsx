import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Container, Typography } from "@mui/material";
function PaymentFailed() {
	return (
		<Container
			maxWidth={false}
			className="w-[100vw] h-[100vh] bg-[#eee] flex items-center justify-center"
		>
			<Box className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-lg p-12 sm:p-16">
				<CancelIcon className="text-[5rem] text-red" />
				<Typography
					className="font-semibold font-Poppins sm:text-[1.2rem] w-[70%]"
					textAlign="center"
				>
					We're sorry, but your payment could not be processed successfully.
				</Typography>
			</Box>
		</Container>
	);
}

export default PaymentFailed;
