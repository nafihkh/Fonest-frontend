export default function ProductCard({
  product,
  variant = "deal", // "deal" | "arrival"
  onAddToCart,
}) {
  const isDeal = variant === "deal";

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className={`relative ${isDeal ? "aspect-square" : "aspect-[4/3]"} bg-gray-50 overflow-hidden`}>
        <img
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={product.image}
        />

        {isDeal && product.discountLabel && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-[12px] font-bold px-3 py-1.5 rounded-full">
            {product.discountLabel}
          </div>
        )}

        {!isDeal && product.isNew && (
          <div className="absolute top-4 left-4 bg-green-500 text-white text-[12px] font-bold px-3 py-1.5 rounded-full">
            NEW
          </div>
        )}
      </div>

      <div className="p-5">
        {!isDeal && (
          <span className="text-[12px] font-medium text-red-600 mb-2 block">
            {product.category}
          </span>
        )}

        <h3 className="text-[15px] font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>

        {isDeal ? (
          <>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[18px] font-bold text-gray-900">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-[14px] text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              )}
            </div>

            <button
              onClick={() => onAddToCart?.(product)}
              className="w-full py-2.5 bg-red-600 text-white rounded-xl font-medium text-[14px] hover:bg-red-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
              type="button"
            >
              Add to Cart
            </button>
          </>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-bold text-gray-900">
              {product.price}
            </span>

            <button
              onClick={() => onAddToCart?.(product)}
              className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
              type="button"
              aria-label="Add to cart"
            >
              <i className="ri-shopping-cart-line text-[18px]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}