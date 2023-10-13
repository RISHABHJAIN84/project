import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	showCart: false,
};

export const productSlice = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		removeFromCart: (state, action) => {
			const { slug } = action.payload;
			const existItem = state.cartItems.find(
				(x) => x.item.slug?.current === slug?.current
			);
			if (existItem) {
				if (existItem.quantity === 1) {
					state.cartItems = state.cartItems.filter(
						(cartItem) => cartItem.item.slug?.current !== slug?.current
					);
				} else {
					state.cartItems = state.cartItems.map((x) => {
						if (x.item.slug?.current == slug?.current) {
							const qty = x.quantity - 1;
							return { ...x, quantity: qty };
						}
						return x;
					});
				}
			}
		},
		addToCart: (state, action) => {
			const { item } = action.payload;
			const existItem = state.cartItems.find(
				(x) => x.item.slug?.current === item.slug?.current
			);
			if (existItem) {
				state.cartItems = state.cartItems.map((x) => {
					if (x.item.slug?.current == item.slug?.current) {
						const qty = x.quantity + 1;
						return { ...x, quantity: qty };
					}
					return x;
				});
			} else {
				state.cartItems.push({ item, quantity: 1 });
			}
		},
		setShowCart: (state, action) => {
			const { showCart } = action.payload;
			state.showCart = showCart;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, setShowCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
