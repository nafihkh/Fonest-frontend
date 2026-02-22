import { Link } from "react-router-dom";

const LOGO =
  "https://res.cloudinary.com/dl0wwvy4j/image/upload/v1771488519/Logo_c07lrq.jpg";

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-red-50 to-red-100/50 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img alt="FONEST" className="h-10 w-10 object-contain" src={LOGO} />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                FONEST
              </span>
            </div>

            <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
              Your trusted destination for premium digital gadgets and accessories.
              Quality products, exceptional service.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: "ri-facebook-fill", href: "https://facebook.com" },
                { icon: "ri-instagram-line", href: "https://instagram.com" },
                { icon: "ri-twitter-x-line", href: "https://twitter.com" },
                { icon: "ri-youtube-fill", href: "https://youtube.com" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <i className={`${s.icon} text-[16px]`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link className="text-[14px] text-gray-600 hover:text-red-600 transition-colors duration-300" to="/">Home</Link></li>
              <li><Link className="text-[14px] text-gray-600 hover:text-red-600 transition-colors duration-300" to="/shop">Shop</Link></li>
              <li><Link className="text-[14px] text-gray-600 hover:text-red-600 transition-colors duration-300" to="/about">About Us</Link></li>
              <li><Link className="text-[14px] text-gray-600 hover:text-red-600 transition-colors duration-300" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-gray-900 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2.5">
              <li><Link className="text-[14px] text-gray-600 hover:text-red-600 transition-colors duration-300" to="/tracking">Track Order</Link></li>
              <li><Link className="text-[14px] text-gray-600 hover:text-red-600 transition-colors duration-300" to="/orders">Order History</Link></li>
              <li><button className="text-[14px] text-gray-600 hover:text-red-600 transition-colors duration-300" type="button">Returns &amp; Refunds</button></li>
              <li><button className="text-[14px] text-gray-600 hover:text-red-600 transition-colors duration-300" type="button">Warranty Info</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="ri-phone-line text-[16px] text-red-600 mt-0.5" />
                <span className="text-[14px] text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-mail-line text-[16px] text-red-600 mt-0.5" />
                <span className="text-[14px] text-gray-600">support@fonest.com</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[16px] text-red-600 mt-0.5" />
                <span className="text-[14px] text-gray-600">
                  123 Tech Street, Silicon Valley, CA 94025
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-red-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-gray-600">© 2025 FONEST. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button className="text-[13px] text-gray-600 hover:text-red-600 transition-colors duration-300" type="button">
                Privacy Policy
              </button>
              <button className="text-[13px] text-gray-600 hover:text-red-600 transition-colors duration-300" type="button">
                Terms of Service
              </button>
              <a
                href="https://fonset.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                Powered by Fonest
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}