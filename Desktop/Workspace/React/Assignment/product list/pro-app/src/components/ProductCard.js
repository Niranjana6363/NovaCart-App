function ProductCard({ product }) {
  return (
    <article className="product-card">

      <div className="image-container">

        <span className="category-tag">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
        />

      </div>

      <div className="product-info">

        <div className="product-header">

          <h3>{product.title}</h3>

          <p className="rating">
            {/* ★ <span>{product.rating}</span> */}
             ★{product.rating.rate}{product.rating.count}
          </p>

        </div>

        <div className="product-footer">

          <p className="price">
            ${product.price}
          </p>

          <button className="add-button">
            Add to bag
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;