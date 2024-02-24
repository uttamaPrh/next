import { Metadata } from "next";

type Props = {
  params: {
    productID: string;
  };
};

// Function to asynchronously generate metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const title = await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`${params.productID}`);
      }, 100);
    });

    // Returning the metadata object
    return {
      title: `Product is ${title}`,
    };
  } catch (error) {
    // Handle any errors
    console.error("Error generating metadata:", error);
    throw error;
  }
};

// Product page component
export default function ProductPage({ params }: Props) {
  return (
    <div>
      <h1>Product {params.productID}</h1>
      <p>Page product!</p>
    </div>
  );
}
