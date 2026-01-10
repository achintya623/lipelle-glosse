import { useParams } from "react-router-dom";

export default function ProductDetails({
  products,
  addToCart,
  increment,
  decrement,
  buyNow,
}) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return <div className="text-center text-2xl mt-20">Product not found</div>;

  return (
    <div className="flex justify-center items-center min-h-[76vh] px-4 sm:px-8">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-[260px] sm:w-[320px] lg:w-[380px] h-[360px] sm:h-[420px] lg:h-[480px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-evenly gap-6 text-center lg:text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-volkhov">
              {product.category} {product.shade}
            </h1>
            <p className="text-gray-600 mt-2">{product.name}</p>
          </div>

          <div className="text-2xl font-bold">${product.price}</div>

          <p className="w-full text-sm sm:text-base">{product.description}</p>

          <div>★ {product.rating}</div>
          <div>Stock: {product.stock}</div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start justify-center lg:justify-start">
            {product.added ? (
              <div className="flex gap-6 text-xl items-center">
                <button
                  onClick={() => decrement(product.id)}
                  className="hover:scale-110 transition"
                >
                  −
                </button>
                {product.quantity}
                <button
                  onClick={() => increment(product.id)}
                  className="hover:scale-110 transition"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product.id)}
                className="bg-[#ff4646] text-white px-8 py-3 rounded-xl transition hover:scale-105"
              >
                Add to Cart
              </button>
            )}

            <button
              className="bg-black text-white px-8 py-3 rounded-xl transition hover:scale-105"
              onClick={() => buyNow(product.id)}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
