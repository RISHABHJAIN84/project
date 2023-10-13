import { client } from "@/sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";
export function sanityImgUrl(source) {
	const builder = ImageUrlBuilder(client);
	return builder.image(source).auto('format').fit('max').url();
}
