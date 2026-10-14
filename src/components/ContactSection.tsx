import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function ContactSection() {
  const handleMessengerClick = () => {
    if (siteConfig.messengerUrl) {
      window.open(siteConfig.messengerUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Please configure the Messenger URL in siteConfig.");
    }
  };

  const handleFacebookClick = () => {
    if (siteConfig.facebookUrl) {
      window.open(siteConfig.facebookUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
          Ready to Discover Amarillo?
        </h2>
        <p className="text-lg text-charcoal/80 max-w-2xl mx-auto mb-8">
          Explore our product sizes, check available prices, and contact us for your inquiries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={handleMessengerClick}
            className="bg-white hover:bg-gray-50 text-charcoal px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Chat on Messenger
          </button>
          {siteConfig.facebookUrl && (
            <button
              onClick={handleFacebookClick}
              className="bg-white/10 hover:bg-white/20 text-charcoal border-2 border-white/30 px-8 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              
              Visit Our Page
            </button>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-charcoal/90 text-sm">
          {siteConfig.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{siteConfig.phone}</span>
            </div>
          )}
          {siteConfig.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{siteConfig.email}</span>
            </div>
          )}
          {siteConfig.address && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{siteConfig.address}</span>
            </div>
          )}
        </div>
        {!siteConfig.messengerUrl && (
          <p className="text-xs text-charcoal/70 mt-6 bg-white/20 rounded-lg p-3">
            Note: Messenger URL not configured yet. Update siteConfig.ts with your business link.
          </p>
        )}
      </div>
    </section>
  );
}
