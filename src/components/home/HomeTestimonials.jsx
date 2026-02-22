import { motion } from "framer-motion";
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Customer",
    text:
      "Amazing quality products! My Apple Watch arrived in perfect condition and the customer service was exceptional.",
    avatar:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602657/peqiblbo_bs5j1t.pnghttps://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602788/57f874a3731a61926d6b998d6809044b_dkprff.jpg",
  },
  {
    name: "Michael Chen",
    role: "Verified Customer",
    text:
      "Fast delivery and authentic products. FONEST is now my go-to store for all tech gadgets.",
    avatar:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602803/5f8942a2ee686571ac332bfe5066de7b_r6oihj.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Verified Customer",
    text:
      "The mobile service pickup and delivery is a game changer. Highly recommend!",
    avatar:
      "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771602845/12e12fd076ae4ccd43959479f223c8ef_zhlkbw.jpg",
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HomeTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[15px] text-gray-600">
            Join thousands of satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
                key={t.name}
                variants={item}
                className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-100"
              >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-[16px] text-yellow-400" />
                ))}
              </div>

              <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <img
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  src={t.avatar}
                />
                <div>
                  <h4 className="text-[14px] font-semibold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-[13px] text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}