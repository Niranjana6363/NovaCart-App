// import Image from "next/image";
// import Link from "next/link";
// import { Product } from "../services/products-service";

// interface Props {
//   products: Product[];
// }

// export default function ProductList({ products }: Props) {
//   return (
//     <div className="product-container">

//       {products.map((product) => (

//         <div className="product-card" key={product.id}>

//           <Image
//             src={product.thumbnail}
//             alt={product.title}
//             width={250}
//             height={200}
//             className="product-image"
//           />

//           <h3>{product.title}</h3>

//           <p>{product.description}</p>

//           <h4>${product.price}</h4>

//           <p>Rating: ⭐ {product.rating}</p>

//           <Link href={`/products/${product.id}`}>
//             View Details
//           </Link>

//         </div>

//       ))}

//     </div>
//   );
// }


import { Product } from "../services/products-service";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}
