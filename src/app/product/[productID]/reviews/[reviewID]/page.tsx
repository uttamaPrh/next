export default function reviews({
  params,
}: {
  params: {
    productID: string;
    reviewID: string;
  };
}) {
  return (
    <div>
      <h1>
        Review {params.reviewID} Page {params.productID}
      </h1>
    </div>
  );
}
