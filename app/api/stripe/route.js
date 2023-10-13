import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
export async function POST(request) {
	const { cartItems } = await request.json();
	try {
		if (!!cartItems?.length) {
			const params = {
				submit_type: "pay",
				mode: "payment",
				payment_method_types: ["card"],
				billing_address_collection: "required",
				line_items: cartItems.map(({ item, quantity }) => {
					const img = item.image.asset._ref;
					const newImage = img
						.replace(
							"image-",
							`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/`
						)
						.replace("-webp", ".webp")
						.replace("-jpg", ".jpg")
						.replace("-png", ".png");
					return {
						price_data: {
							currency: "inr",
							product_data: {
								name: item.name,
								images: [newImage],
							},
							unit_amount: item.price * 100,
						},
						adjustable_quantity: {
							enabled: true,
							minimum: 1,
						},
						quantity,
					};
				}),
				success_url: `${process.env.NEXT_PUBLIC_ORIGIN}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${process.env.NEXT_PUBLIC_ORIGIN}/payment/failed?session_id={CHECKOUT_SESSION_ID}`,
			};
			const session = await stripe.checkout.sessions.create(params);
			return NextResponse.json({ session }, { status: 200 });
		}
		return NextResponse.json({ error: "No items in cart" }, { status: 400 });
	} catch (error) {
		return NextResponse.json(
			{ error: error.message },
			{ status: error.statusCode || 500 }
		);
	}
}
