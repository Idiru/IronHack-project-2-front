import React from 'react';

function ProductCard({ product }) {
  return (
    <div>
      <div>
        <Header />
        <h1>CatalogPage</h1>
        <div>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductCard;