import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "@/components/ReduxProvider";
export const metadata = {
	title: "Gaming Sphere",
	description: "All in one gaming store",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				
			</head>
			<body className={inter.className}>
				<ReduxProvider>{children} </ReduxProvider>
			</body>
		</html>
	);
}
