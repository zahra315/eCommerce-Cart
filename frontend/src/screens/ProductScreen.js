import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/shopclass/products/1798556/shirt-1605041230-13b6b30f09e9a7296293dafbcbcc5525.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTUwOC44NTcxNDI4NTcxNDI3XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs3ODRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvMzNhMDhjNjRmOGRiMDMyYmY3NjA1ZDQzMWFkNmQyMTAvZnJvbnQtMTQ5Njc4MTk0Ni03Mzk1ZWYxYmRkMmZjNThlYzU0ZTQ1ZTI3N2M3NWFhNy5wbmciXSwgeyJ5IjogNTA2LCAieCI6IDYwNywgImJhY2tncm91bmQiOiAiZWY1MTBkIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDYwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ=="
            alt="product name"
          />
        </div>

        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price: $49.99</p>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse venenatis risus vel blandit pellentesque.{" "}
          </p>
        </div>
      </div>
      <div className="productscreen__right">
        <di className="right__info">
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </di>
      </div>
    </div>
  );
};

export default ProductScreen;
