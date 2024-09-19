import { useState, useEffect } from "react";
import ProductCard from '../components/ProductCard';
import '../App.css';

function Products() {
  const [products, updateProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const productList = await res.json();
      updateProducts(productList);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
