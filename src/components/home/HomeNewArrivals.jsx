import { Link } from "react-router-dom";
import ProductCard from "./_ProductCard";

const arrivals = [
  {
    id: 1,
    title: "Apple Watch Series 9",
    category: "Smart Watch",
    price: "$399",
    isNew: true,
    image:
      "https://readdy.ai/api/search-image?query=premium%20luxury%20apple%20watch%20series%209%20smartwatch%20with%20sleek%20black%20band%20on%20pure%20white%20minimalist%20background%20product%20photography%20studio%20lighting%20ultra%20realistic%20high%20resolution%20close%20up%20detailed%20view&width=800&height=800&seq=prod1&orientation=squarish",
  },
  {
    id: 2,
    title: "AirPods Pro 2nd Gen",
    category: "Airpods",
    price: "$249",
    isNew: true,
    image:
      "https://readdy.ai/api/search-image?query=apple%20airpods%20pro%20second%20generation%20white%20wireless%20earbuds%20with%20charging%20case%20on%20clean%20white%20background%20premium%20product%20photography%20studio%20lighting%20ultra%20realistic%20high%20detail%20close%20up%20shot&width=800&height=800&seq=prod2&orientation=squarish",
  },
  {
    id: 4,
    title: "Sony WH-1000XM5",
    category: "Headphone",
    price: "$349",
    isNew: true,
    image:
      "https://readdy.ai/api/search-image?query=sony%20premium%20noise%20cancelling%20over%20ear%20headphones%20black%20sleek%20design%20on%20white%20background%20product%20photography%20studio%20lighting%20ultra%20realistic%20high%20detail&width=800&height=800&seq=prod4&orientation=squarish",
  },
  {
    id: 9,
    title: "JBL Flip 6",
    category: "Bluetooth Speaker",
    price: "$129",
    isNew: true,
    image:
      "https://readdy.ai/api/search-image?query=jbl%20portable%20bluetooth%20speaker%20cylindrical%20design%20black%20on%20white%20background%20product%20photography%20studio%20lighting%20ultra%20realistic%20high%20detail&width=800&height=800&seq=prod9&orientation=squarish",
  },
  {
    id: 11,
    title: "Samsung Galaxy Buds 2 Pro",
    category: "Airpods",
    price: "$199",
    isNew: true,
    image:
      "https://readdy.ai/api/search-image?query=samsung%20galaxy%20wireless%20earbuds%20with%20charging%20case%20black%20on%20white%20background%20premium%20product%20photography%20studio%20lighting%20ultra%20realistic&width=800&height=800&seq=prod11&orientation=squarish",
  },
  {
    id: 12,
    title: "Garmin Venu 3",
    category: "Watches",
    price: "$449",
    isNew: true,
    image:
      "https://readdy.ai/api/search-image?query=garmin%20fitness%20smartwatch%20with%20amoled%20display%20black%20band%20on%20white%20background%20product%20photography%20studio%20lighting%20ultra%20realistic&width=800&height=800&seq=prod12&orientation=squarish",
  },
];

export default function HomeNewArrivals() {
  const handleAddToCart = (p) => console.log("add to cart", p.id);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
          <p className="text-[15px] text-gray-600">
            Check out the latest additions to our collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {arrivals.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="block">
              <ProductCard
                product={p}
                variant="arrival"
                onAddToCart={handleAddToCart}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}