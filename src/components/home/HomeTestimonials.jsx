const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Customer",
    text:
      "Amazing quality products! My Apple Watch arrived in perfect condition and the customer service was exceptional.",
    avatar:
      "https://readdy.ai/api/search-image?query=professional%20woman%20smiling%20portrait%20headshot%20clean%20white%20background%20studio%20lighting%20realistic&width=100&height=100&seq=avatar1&orientation=squarish",
  },
  {
    name: "Michael Chen",
    role: "Verified Customer",
    text:
      "Fast delivery and authentic products. FONEST is now my go-to store for all tech gadgets.",
    avatar:
      "https://readdy.ai/api/search-image?query=professional%20man%20smiling%20portrait%20headshot%20clean%20white%20background%20studio%20lighting%20realistic&width=100&height=100&seq=avatar2&orientation=squarish",
  },
  {
    name: "Emily Rodriguez",
    role: "Verified Customer",
    text:
      "The mobile service pickup and delivery is a game changer. Highly recommend!",
    avatar:
      "https://readdy.ai/api/search-image?query=young%20woman%20smiling%20portrait%20headshot%20clean%20white%20background%20studio%20lighting%20realistic&width=100&height=100&seq=avatar3&orientation=squarish",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[15px] text-gray-600">
            Join thousands of satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}