import { Package, ShoppingCart, MessageCircle, Users } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Package size={32} />,
      title: "Everyday Convenience",
      description: "Options for different household and business needs to fit your daily routine.",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "Size Options",
      description: "Multiple package sizes to choose from, whether for home use or business volume.",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Easy Inquiries",
      description: "A convenient way to ask about products and prices through Messenger.",
    },
    {
      icon: <Users size={32} />,
      title: "Customer-Focused Service",
      description: "A simple, approachable buying experience tailored to your needs.",
    },
  ];

  return (
    <section id="why-amarillo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Why Choose Amarillo?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-primary-dark mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{reason.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
