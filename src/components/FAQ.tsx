import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../data/faqs";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-${faq.id}`}
              >
                <h3 className="font-semibold text-charcoal pr-4">{faq.question}</h3>
                {openItem === faq.id ? (
                  <ChevronUp size={20} className="text-primary-dark flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-muted flex-shrink-0" />
                )}
              </button>
              {openItem === faq.id && (
                <div id={`faq-${faq.id}`} className="px-6 pb-5 pt-1">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
