import { products, formatPrice } from "../data/products";
import { siteConfig } from "../config/siteConfig";

export default function PriceList() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Amarillo Product Price List
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            View our full range of products and current pricing information.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal uppercase tracking-wider">
                    Inquiry
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-charcoal">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                      {product.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-dark">
                      {formatPrice(product.price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => {
                          if (!siteConfig.messengerUrl) {
                            alert("Please configure the Messenger URL in siteConfig.");
                            return;
                          }
                          const message = `Hi ${siteConfig.brandName}! I'm interested in ${product.name} (${product.size}).`;
                          window.open(
                            `${siteConfig.messengerUrl}?text=${encodeURIComponent(message)}`,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        className="text-primary-dark hover:text-charcoal font-medium transition-colors"
                      >
                        Inquire
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden divide-y divide-gray-100">
            {products.map((product) => (
              <div key={product.id} className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-charcoal">{product.name}</h3>
                  <span className="text-sm text-muted">{product.size}</span>
                </div>
                <p className="text-lg font-bold text-primary-dark mb-3">{formatPrice(product.price)}</p>
                <button
                  onClick={() => {
                    if (!siteConfig.messengerUrl) {
                      alert("Please configure the Messenger URL in siteConfig.");
                      return;
                    }
                    const message = `Hi ${siteConfig.brandName}! I'm interested in ${product.name} (${product.size}).`;
                    window.open(
                      `${siteConfig.messengerUrl}?text=${encodeURIComponent(message)}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  className="text-sm bg-primary hover:bg-primary-dark text-charcoal px-4 py-2 rounded-full font-medium transition-colors"
                >
                  Inquire
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
