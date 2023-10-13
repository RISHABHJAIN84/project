import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Product from "./Product";
import { productsQuery } from "@/sanity/lib/query";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
async function Products() {
	let products = await sanityFetch({ query: productsQuery });
	products = products.sort((a, b) => {
		return a.price - b.price - (a.rating - b.rating);
	});
	return (
		<Container>
			<Box></Box>
			<Grid container spacing={{ xs: 1, sm: 4 }}>
				{!!products?.length &&
					products.map((product) => {
						return (
							<Product
								key={product.slug}
								image={product.image[0]}
								name={product.name}
								rating={product.rating}
								price={product.price}
								slug={product.slug}
							/>
						);
					})}
			</Grid>
		</Container>
	);
}

export default Products;
