const products = [
  {
    name: "FOUR SEASONS TOTAL LANDSCAPING",
    imageUrl:
      "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/shopclass/products/1798556/shirt-1605041230-13b6b30f09e9a7296293dafbcbcc5525.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTUwOC44NTcxNDI4NTcxNDI3XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs3ODRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvMzNhMDhjNjRmOGRiMDMyYmY3NjA1ZDQzMWFkNmQyMTAvZnJvbnQtMTQ5Njc4MTk0Ni03Mzk1ZWYxYmRkMmZjNThlYzU0ZTQ1ZTI3N2M3NWFhNy5wbmciXSwgeyJ5IjogNTA2LCAieCI6IDYwNywgImJhY2tncm91bmQiOiAiZWY1MTBkIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDYwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ==",
    description:
      "This shirt was designed in celebration of the absurdity of the end of the Trump campaign. It will never be offered on black, because some things are meant to be orange, like sunsets and Gritty’s fur.",
    price: 20,
    countInStock: 25,
  },
  {
    name: "NOT FAST, NOT FURIOUS",
    imageUrl:
      "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/threadless/products/1701868/shirt-1600740106-8873dcee50c68ac13fddaca712958774.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTUwOC44NTcxNDI4NTcxNDI3XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs3ODRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvMzRjYmMyYWI4Y2M4YWQzNjNiMWJhOGJiNzc1MjYxMmUvZnJvbnQtMTQ5Njc4MTY2OC03Mzk1ZWYxYmRkMmZjNThlYzU0ZTQ1ZTI3N2M3NWFhNy5wbmciXSwgeyJ5IjogNTA2LCAieCI6IDYwNywgImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDYwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ==",
    description:
      "The classic t-shirt features boxy, classic fit. Solid colors: 100% Preshrunk jersey knit 5.3 oz/yd cotton. Unisex sizing to fit most people.",
    price: 25,
    countInStock: 15,
  },
  {
    name: "HOPTOPUS",
    imageUrl:
      "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/HabbyArt/products/1285406/shirt-1580600372-baa7bac463d9560c63424a6c1d2b35ba.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTUwOC44NTcxNDI4NTcxNDI3XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs3ODRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvNjE4ODc0OGFmZDk1MTQ0YzM5MTc1Y2IxNGMwNjE4NmYvZnJvbnQtMTQ5Njc4MjIyNS01YWZjZDA0NzU1OWZkYzJkZTNiMjU3NDQxYmM4YWNlMy5wbmciXSwgeyJ5IjogNTA2LCAieCI6IDYwNywgImJhY2tncm91bmQiOiAiZGVkZWRlIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDYwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ==",
    description:
      "The Hoptopus. A unique species that survives on cold beer and fish.",
    price: 19,
    countInStock: 25,
  },
  {
    name: "BETWEEN THE MOUNTAINS AND THE STARS",
    imageUrl:
      "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/thepapercrane/products/756906/shirt-1536847021-aaf9a984e45691a52a11b568369a50b0.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTUwOC44NTcxNDI4NTcxNDI3XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs3ODRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvMzRjYmMyYWI4Y2M4YWQzNjNiMWJhOGJiNzc1MjYxMmUvZnJvbnQtMTQ5Njc4MTY2OC03Mzk1ZWYxYmRkMmZjNThlYzU0ZTQ1ZTI3N2M3NWFhNy5wbmciXSwgeyJ5IjogNTA2LCAieCI6IDYwNywgImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDYwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ==",
    description:
      "The classic t-shirt features boxy, classic fit. Solid colors: 100% Preshrunk jersey knit 5.3 oz/yd cotton. Unisex sizing to fit most people.",
    price: 15,
    countInStock: 25,
  },
];

module.exports = products;
