export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  type?: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote: "Customer feedback will appear here once available. This is a placeholder.",
    name: "Verified Customer",
    type: "Home Cook",
  },
  {
    id: "placeholder-2",
    quote: "We value our customers' experiences. Genuine reviews will be added soon.",
    name: "Sari-Sari Store Owner",
    type: "Retailer",
  },
  {
    id: "placeholder-3",
    quote: "Check back for authentic testimonials from our growing community.",
    name: "Food Business Owner",
    type: "Business",
  },
];
