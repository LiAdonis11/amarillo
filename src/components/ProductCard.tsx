import { MessageCircle } from "lucide-react";
import { formatPrice } from "../data/products";
import type { Product } from "../data/products";
import { siteConfig } from "../config/siteConfig";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleInquire = () => {
    if (!siteConfig.messengerUrl) {
      alert("Please configure the Messenger URL in siteConfig to inquire about this product.");
      return;
    }

    const message = `Hi ${siteConfig.brandName}! I'm interested in ${product.name} (${product.size}). Could you please share more details and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${siteConfig.messengerUrl}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="aspect-square bg-cream p-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={`${product.name} ${product.size}`}
          className="w-full h-full object-contain rounded-lg"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="flex flex-col items-center justify-center text-center">
                  <div class="text-5xl mb-3">🥄</div>
                  <p class="text-charcoal font-semibold">${product.size}</p>
                </div>
              `;
            }
          }}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-charcoal mb-1">{product.name}</h3>
        <p className="text-muted text-sm mb-2">{product.size}</p>
        <p className="text-2xl font-bold text-primary-dark mb-3">{formatPrice(product.price)}</p>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
        <button
          onClick={handleInquire}
          className="w-full bg-primary hover:bg-primary-dark text-charcoal px-6 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2 mt-auto"
        >
          <MessageCircle size={18} />
          Inquire About This Product
        </button>
      </div>
    </div>
  );
}
