import { Link } from "react-router-dom";
import ProductCard from "./_ProductCard";
import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";

const arrivals = [
  {
    id: 1,
    title: "Apple Watch Series 9",
    category: "Smart Watch",
    price: "$399",
    isNew: true,
    image:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602151/808f1440431c3eb26645528fb9562ef2_1_qqps1q.jpg",
  },
  {
    id: 2,
    title: "AirPods Pro 2nd Gen",
    category: "Airpods",
    price: "$249",
    isNew: true,
    image:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602195/c110687a124bb9b1dc015e0cf477025f_1_ywnclb.jpg",
  },
  {
    id: 4,
    title: "Sony WH-1000XM5",
    category: "Headphone",
    price: "$349",
    isNew: true,
    image:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602236/58a53f1b802dcc1ec108f7e308501710_saushh.jpg",
  },
  {
    id: 9,
    title: "JBL Flip 6",
    category: "Bluetooth Speaker",
    price: "$129",
    isNew: true,
    image:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602315/anc0chdd_xybfdy.png",
  },
  {
    id: 11,
    title: "Samsung Galaxy Buds 2 Pro",
    category: "Airpods",
    price: "$199",
    isNew: true,
    image:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602381/b890cb203710de0fc471fdfef808d079_bp9afi.jpg",
  },
  {
    id: 12,
    title: "Garmin Venu 3",
    category: "Watches",
    price: "$449",
    isNew: true,
    image:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602452/xs9zs0i9_pwrcng.png",
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

export default function HomeNewArrivals() {
  const handleAddToCart = (p) => console.log("add to cart", p.id);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
          <p className="text-[15px] text-gray-600">
            Check out the latest additions to our collection
          </p>
        </div>
        </Reveal>

        <Reveal>
       <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {arrivals.map((p) => (
            <motion.div key={p.id} variants={item}>
              <Link to={`/product/${p.id}`} className="block">
                <ProductCard
                  product={p}
                  variant="arrival"
                  onAddToCart={handleAddToCart}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        </Reveal>
      </div>
    </section>
  );
}