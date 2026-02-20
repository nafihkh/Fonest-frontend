import { Link } from "react-router-dom";
import Reveal from "../animations/Reveal";
import { motion } from "framer-motion";

const categories = [
  { name: "Watches", icon: "ri-time-line", count: 45 },
  { name: "Smart Watch", icon: "ri-smartphone-line", count: 32 },
  { name: "Airpods", icon: "ri-headphone-line", count: 28 },
  { name: "Headphone", icon: "ri-headphone-fill", count: 41 },
  { name: "Charger", icon: "ri-battery-charge-line", count: 67 },
  { name: "Data Cable", icon: "ri-usb-line", count: 53 },
  { name: "Neckband", icon: "ri-music-line", count: 19 },
  { name: "Used Phones", icon: "ri-smartphone-fill", count: 89 },
  { name: "Bluetooth Speaker", icon: "ri-speaker-3-line", count: 24 },
  { name: "Mobile Service", icon: "ri-tools-line", count: 0 },
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

export default function HomeCategories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-[15px] text-gray-600">
            Explore our wide range of premium tech products
          </p>
        </div>
        </Reveal>
        <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((c) => (
                <Link
                key={c.name}
                to={`/shop?category=${encodeURIComponent(c.name)}`}
                className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover:-translate-y-1 cursor-pointer"
                >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${c.icon} text-[24px] text-red-600`} />
                </div>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-1">
                    {c.name}
                </h3>
                <p className="text-[13px] text-gray-500">{c.count} products</p>
                </Link>
            ))}
            </div>
        </Reveal>
      </div>
    </section>
  );
}