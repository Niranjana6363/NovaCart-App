const API_URL = "https://dummyjson.com/products?limit=30";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: ProductsResponse = await response.json();

    return data.products;
  } catch (error) {
    console.error("Product fetching error:", error);
    throw error;
  }
}