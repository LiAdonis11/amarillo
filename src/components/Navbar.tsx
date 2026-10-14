import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMessengerClick = () => {
    if (siteConfig.messengerUrl) {
      window.open(siteConfig.messengerUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Please configure the Messenger URL in siteConfig.");
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-primary-dark">
              {siteConfig.brandName}
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-charcoal hover:text-primary-dark transition-colors">
                Home
              </a>
              <a href="#products" className="text-charcoal hover:text-primary-dark transition-colors">
                Our Products
              </a>
              <a href="#why-amarillo" className="text-charcoal hover:text-primary-dark transition-colors">
                Why Amarillo
              </a>
              <a href="#faq" className="text-charcoal hover:text-primary-dark transition-colors">
                FAQs
              </a>
              <a href="#contact" className="text-charcoal hover:text-primary-dark transition-colors">
                Contact
              </a>
              <button
                onClick={handleMessengerClick}
                className="bg-primary hover:bg-primary-dark text-charcoal px-6 py-2 rounded-full font-semibold transition-colors duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
                aria-label="Inquire Now on Messenger"
              >
                <MessageCircle size={18} />
                Inquire Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-charcoal hover:bg-cream hover:text-primary-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-charcoal hover:bg-cream hover:text-primary-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Products
            </a>
            <a
              href="#why-amarillo"
              className="block px-3 py-2 text-charcoal hover:bg-cream hover:text-primary-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Why Amarillo
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-charcoal hover:bg-cream hover:text-primary-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-charcoal hover:bg-cream hover:text-primary-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={() => {
                handleMessengerClick();
                setIsOpen(false);
              }}
              className="w-full mt-2 bg-primary hover:bg-primary-dark text-charcoal px-4 py-3 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              aria-label="Inquire Now on Messenger"
            >
              <MessageCircle size={18} />
              Inquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
