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
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602151/808f1440431c3eb26645528fb9562ef2_1_qqps1q.jpg",
  },
  {
    id: 2,
    title: "AirPods Pro 2nd Gen",
    price: "$249",
    oldPrice: "$299",
    discountLabel: "-17%",
    image:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602195/c110687a124bb9b1dc015e0cf477025f_1_ywnclb.jpg",
  },
  {
    id: 3,
    title: "iPhone 15 Pro Max",
    price: "$1199",
    oldPrice: "$1399",
    discountLabel: "-14%",
    image:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602612/fb319b48989079d1a6d8b5edcddb8c17_1_k05axu.jpg",
  },
  {
    id: 5,
    title: "Samsung Galaxy Watch 6",
    price: "$299",
    oldPrice: "$349",
    discountLabel: "-14%",
    image:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602657/peqiblbo_bs5j1t.png",
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