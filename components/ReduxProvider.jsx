"use client";
import { store } from "@/lib/redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
export default function ReduxProvider({ children }) {
	return (
		<Provider store={store}>
			<SessionProvider>{children}</SessionProvider>
		</Provider>
	);
}
