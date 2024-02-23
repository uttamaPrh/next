export default function ProductPage({
  params,
}: {
  params: { productID: string };
}) {
  return <h1>Product Details {params.productID}</h1>;
}
