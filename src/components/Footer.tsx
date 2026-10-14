import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">{siteConfig.brandName}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your everyday cooking oil partner. Quality cooking oil for households, businesses, and resellers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#why-amarillo" className="hover:text-primary transition-colors">
                  Why Amarillo
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>330ML • 1L • 1.5L</li>
              <li>1 GALLON</li>
              <li>2.3KG • 2.55KG</li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  View All Products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {siteConfig.messengerUrl && (
                <li>
                  <a
                    href={siteConfig.messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Messenger
                  </a>
                </li>
              )}
              {siteConfig.facebookUrl && (
                <li>
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              )}
              {siteConfig.phone && <li>{siteConfig.phone}</li>}
              {siteConfig.email && <li>{siteConfig.email}</li>}
              {siteConfig.address && <li>{siteConfig.address}</li>}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} {siteConfig.brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
