import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Unable to fetch products" },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json(data.products);

  } catch (error) {

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );

  }
}