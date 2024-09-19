function ProductCard({ title, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p className="card-text">${price.toFixed(2)}</p> {/* Price formatting */}
      </div>
    </div>
  );
}

export default ProductCard;
