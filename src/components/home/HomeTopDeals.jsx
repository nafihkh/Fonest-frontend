import { Link } from "react-router-dom";
import ProductCard from "./_ProductCard";
import Reveal from "../animations/Reveal";
import { motion } from "framer-motion";

const deals = [
  {
    id: 1,
    title: "Apple Watch Series 9",
    price: "$399",
    oldPrice: "$499",
    discountLabel: "-20%",
    image:
      "https://readdy.ai/api/search-image?query=premium%20luxury%20apple%20watch%20series%209%20smartwatch%20with%20sleek%20black%20band%20on%20pure%20white%20minimalist%20background%20product%20photography%20studio%20lighting%20ultra%20realistic%20high%20resolution%20close%20up%20detailed%20view&width=800&height=800&seq=prod1&orientation=squarish",
  },
  {
    id: 2,
    title: "AirPods Pro 2nd Gen",
    price: "$249",
    oldPrice: "$299",
    discountLabel: "-17%",
    image:
      "https://readdy.ai/api/search-image?query=apple%20airpods%20pro%20second%20generation%20white%20wireless%20earbuds%20with%20charging%20case%20on%20clean%20white%20background%20premium%20product%20photography%20studio%20lighting%20ultra%20realistic%20high%20detail%20close%20up%20shot&width=800&height=800&seq=prod2&orientation=squarish",
  },
  {
    id: 3,
    title: "iPhone 15 Pro Max",
    price: "$1199",
    oldPrice: "$1399",
    discountLabel: "-14%",
    image:
      "https://readdy.ai/api/search-image?query=flagship%20apple%20iphone%2015%20pro%20max%20titanium%20smartphone%20with%20triple%20camera%20system%20on%20pristine%20white%20background%20premium%20product%20photography%20studio%20lighting%20ultra%20realistic%20high%20resolution%20detailed%20close%20up%20view&width=800&height=800&seq=prod3&orientation=squarish",
  },
  {
    id: 5,
    title: "Samsung Galaxy Watch 6",
    price: "$299",
    oldPrice: "$349",
    discountLabel: "-14%",
    image:
      "https://readdy.ai/api/search-image?query=samsung%20galaxy%20smartwatch%20with%20circular%20display%20black%20band%20on%20white%20background%20premium%20product%20photography%20studio%20lighting%20ultra%20realistic&width=800&height=800&seq=prod5&orientation=squarish",
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function HomeTopDeals() {
  const handleAddToCart = (p) => {
    // TODO: connect to cart store/context later
    console.log("add to cart", p.id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal>
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Top Deals</h2>
            <p className="text-[15px] text-gray-600">
              Limited time offers on premium products
            </p>
          </div>

          <Link
            to="/shop"
            className="text-[14px] font-semibold text-red-600 hover:text-red-700 flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            View All <i className="ri-arrow-right-line" />
          </Link>
        </div>
        </Reveal>
        <Reveal delay={0.08}>
        <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            >
          {deals.map((p) => (
                <motion.div key={p.id} variants={item}>
                <ProductCard product={p} variant="item" onAddToCart={handleAddToCart} />
                </motion.div>
            ))}
        </motion.div>
        </Reveal>
      </div>
    </section>
  );
}