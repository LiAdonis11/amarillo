export default function DeliveryInfo() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Getting Amarillo to You
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Contact us to confirm delivery availability, fees, and estimated arrival times for your location.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-charcoal mb-3">What to Ask</h3>
              <ul className="space-y-2 text-muted">
                <li>• Delivery availability in your area</li>
                <li>• Delivery fees and minimum order requirements</li>
                <li>• Bulk-order arrangements for wholesale/resellers</li>
                <li>• Estimated delivery times</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-charcoal mb-3">How to Inquire</h3>
              <p className="text-muted leading-relaxed">
                Use the Messenger button, contact form, or provided contact details to send your location and order details. We'll provide accurate information based on current service coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
