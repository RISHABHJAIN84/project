import { groq } from "next-sanity";

// Get all posts
export const productsQuery = groq`*[_type == "product" && defined(slug.current)]{
  image, name, slug, price, details, rating
}`;
export const bannerQuery = groq`*[_type == "banner" && defined(slug.current)]{
  image, slug
}`;


