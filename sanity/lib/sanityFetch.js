import "server-only";

import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";

const DEFAULT_PARAMS = {};
const DEFAULT_TAGS = [];

export const token = process.env.NEXT_PUBLIC_SANITY_API_KEY;

export async function sanityFetch({
	query,
	params = DEFAULT_PARAMS,
	tags = DEFAULT_TAGS,
}) {
	const isDraftMode = draftMode().isEnabled;
	if (isDraftMode && !token) {
		throw new Error(
			"The `NEXT_PUBLIC_SANITY_API_KEY` environment variable is required."
		);
	}
	const isDevelopment = process.env.NODE_ENV === "development";

	return client.withConfig({ useCdn: true }).fetch(query, params, {
		cache: isDevelopment || isDraftMode ? undefined : "force-cache",
		...(isDraftMode && {
			token: token,
			perspective: "previewDrafts",
		}),
		next: {
			...(isDraftMode && { revalidate: 30 }),
			tags,
		},
	});
}
