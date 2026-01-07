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
    <div className="flex justify-center items-center min-h-[76vh]">
      <div className="w-[70vw] flex gap-16">
        <img
          src={product.image}
          alt="image"
          className="w-[350px] h-[450px] object-cover rounded-3xl shadow-xl"
        />

        <div className="flex flex-col justify-evenly">
          <div>
            <h1 className="text-5xl font-volkhov">
              {product.category} {product.shade}
            </h1>
            <p className="text-lg text-gray-600 mt-2">{product.name}</p>
          </div>

          <div className="text-2xl font-bold">${product.price}</div>
          <p className="w-[30vw]">{product.description}</p>
          <div>★ {product.rating}</div>
          <div>Stock: {product.stock}</div>

          <div className="w-full flex gap-10">
            {product.added ? (
              <div className="flex gap-6 text-xl items-center w-40.5 justify-center">
                <button onClick={() => decrement(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increment(product.id)}>+</button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product.id)}
                className="bg-[#ff4646] text-white px-10 py-3 rounded-xl w-fit"
              >
                Add to Cart
              </button>
            )}
            <button
              className="bg-black text-white  rounded-xl w-fit px-11 py-3"
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
