import Reveal from "../animations/Reveal";
const features = [
  { icon: "ri-shield-check-line", title: "2 Year Warranty", sub: "On all products" },
  { icon: "ri-truck-line", title: "Fast Delivery", sub: "2-3 business days" },
  { icon: "ri-lock-line", title: "Secure Payments", sub: "100% protected" },
  { icon: "ri-customer-service-2-line", title: "24/7 Support", sub: "Always here to help" },
];

export default function HomeFeaturesStrip() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-600 to-red-800">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <Reveal>
            <div key={f.title} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl mx-auto mb-4">
                <i className={`${f.icon} text-[32px] text-white`} />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">{f.title}</h3>
              <p className="text-[13px] text-white/80">{f.sub}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}