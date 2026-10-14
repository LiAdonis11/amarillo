import { MessageCircle, ArrowDown } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function Hero() {
  const handleMessengerClick = () => {
    if (siteConfig.messengerUrl) {
      window.open(siteConfig.messengerUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Please configure the Messenger URL in siteConfig.");
    }
  };

  return (
    <section id="home" className="bg-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal leading-tight mb-6">
              Good Food Starts with{" "}
              <span className="text-primary-dark">{siteConfig.brandName}</span>.
            </h1>
            <p className="text-lg lg:text-xl text-muted leading-relaxed mb-8">
              Discover {siteConfig.brandName} cooking oil for everyday meals, busy kitchens, and growing food businesses. Explore our available sizes and find the right option for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="bg-primary hover:bg-primary-dark text-charcoal px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                Explore Our Products
                <ArrowDown size={20} />
              </a>
              <button
                onClick={handleMessengerClick}
                className="bg-white hover:bg-gray-50 text-charcoal border-2 border-primary px-8 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Inquire on Messenger
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <img
                src="/images/hero-oil.webp"
                alt={`${siteConfig.brandName} cooking oil bottles`}
                className="w-full h-auto object-contain aspect-[4/5] rounded-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="flex items-center justify-center h-96 bg-gradient-to-br from-cream to-white rounded-2xl border-2 border-dashed border-primary/30">
                        <div class="text-center p-6">
                          <div class="text-6xl mb-4">🥄</div>
                          <p class="text-charcoal font-semibold text-lg">${siteConfig.brandName} Cooking Oil</p>
                          <p class="text-muted text-sm mt-2">Product photo placeholder</p>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-charcoal px-6 py-3 rounded-full font-semibold shadow-lg">
              Your Everyday Cooking Oil
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
