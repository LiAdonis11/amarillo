export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "sizes",
    question: "What sizes of Amarillo cooking oil are available?",
    answer: "We offer 330ML, 1L, 1.5L, 1 GALLON, 2.3KG, and 2.55KG sizes. Contact us for current availability.",
  },
  {
    id: "prices",
    question: "How much does each product cost?",
    answer: "Prices may vary. Please check our product showcase and price list, or contact us directly for up-to-date pricing.",
  },
  {
    id: "order",
    question: "How can I place an order?",
    answer: "You can inquire about products through our Messenger button. We'll guide you through the ordering process.",
  },
  {
    id: "wholesale",
    question: "Do you accept wholesale or reseller inquiries?",
    answer: "Yes. Please use our wholesale/reseller inquiry form or contact us directly to discuss bulk orders and reseller opportunities.",
  },
  {
    id: "delivery",
    question: "Do you offer delivery?",
    answer: "Delivery availability, fees, and timelines depend on your location. Contact us to confirm options for your area.",
  },
  {
    id: "contact",
    question: "How can I contact Amarillo?",
    answer: "You can reach us through Messenger, phone, or email. See the contact section for details.",
  },
];
