export type Product = {
  id: string;
  name: string;
  size: string;
  price: number | null;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "amarillo-330ml",
    name: "Amarillo Cooking Oil",
    size: "330ML",
    price: null,
    image: "/images/amarillo-330ml.webp",
    description: "A convenient size for everyday cooking.",
  },
  {
    id: "amarillo-1l",
    name: "Amarillo Cooking Oil",
    size: "1L",
    price: null,
    image: "/images/amarillo-1l.webp",
    description: "A practical option for daily home cooking.",
  },
  {
    id: "amarillo-15l",
    name: "Amarillo Cooking Oil",
    size: "1.5L",
    price: null,
    image: "/images/amarillo-15l.webp",
    description: "A larger size for regular kitchen use.",
  },
  {
    id: "amarillo-gallon",
    name: "Amarillo Cooking Oil",
    size: "1 GALLON",
    price: null,
    image: "/images/amarillo-gallon.webp",
    description: "A larger-format option for higher-volume use.",
  },
  {
    id: "amarillo-23kg",
    name: "Amarillo Cooking Oil",
    size: "2.3KG",
    price: null,
    image: "/images/amarillo-23kg.webp",
    description: "An alternative package size for your kitchen needs.",
  },
  {
    id: "amarillo-255kg",
    name: "Amarillo Cooking Oil",
    size: "2.55KG",
    price: null,
    image: "/images/amarillo-255kg.webp",
    description: "A larger package option for your cooking needs.",
  },
];

export const formatPrice = (price: number | null): string => {
  if (price === null) {
    return "Message us for price";
  }
  return `₱${price.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};
