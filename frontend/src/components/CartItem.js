import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src='"https://cdn-images.threadless.com/threadless-media/artist_shops/shops/shopclass/products/1798556/shirt-1605041230-13b6b30f09e9a7296293dafbcbcc5525.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTUwOC44NTcxNDI4NTcxNDI3XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs3ODRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvMzNhMDhjNjRmOGRiMDMyYmY3NjA1ZDQzMWFkNmQyMTAvZnJvbnQtMTQ5Njc4MTk0Ni03Mzk1ZWYxYmRkMmZjNThlYzU0ZTQ1ZTI3N2M3NWFhNy5wbmciXSwgeyJ5IjogNTA2LCAieCI6IDYwNywgImJhY2tncm91bmQiOiAiZWY1MTBkIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDYwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ=='
          alt="product name"
        />
      </div>

      <Link to={`/product/${1111}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>

      <p className="cartitem__price">$49.99</p>

      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
