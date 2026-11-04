
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductDetails from "../../components/ProdutDetails";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
  brand?: string;
}

// Fetch product from DummyJSON API
async function getProduct(id: string): Promise<Product> {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

// Async component
async function ProductContent({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = await getProduct(productId);

  return <ProductDetails product={product} />;
}

// Main page
export default function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <h2>Loading Product...</h2>
          <p>Please wait...</p>
        </div>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}
