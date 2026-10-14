# Amarillo Cooking Oil Landing Page

A modern, professional, responsive landing page for Amarillo, an independent cooking oil brand serving households, small retailers, food businesses, wholesalers, and resellers.

## Features

- Responsive design (mobile-first approach)
- Product showcase with 6 sizes (330ML, 1L, 1.5L, 1 GALLON, 2.3KG, 2.55KG)
- Centralized product data with editable prices
- Price list table (desktop) and stacked layout (mobile)
- FAQ accordion with accessibility
- Wholesale/reseller inquiry form
- Facebook Messenger integration
- SEO optimized
- Accessibility features (ARIA, keyboard navigation, focus states)

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- React Hook Form + Zod

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Configuration

Update the following files to customize for your business:

- `src/config/siteConfig.ts` - Brand name, contact info, Messenger/Facebook URLs
- `src/data/products.ts` - Product prices (set `price: number` or keep as `null` for "Message us for price")
- `src/data/testimonials.ts` - Add real customer testimonials
- `src/data/faqs.ts` - Customize FAQ content
- `public/images/` - Add product and hero images (WebP recommended)

## Messenger Integration

To enable product inquiries via Messenger, add your Messenger/Facebook chat URL to `siteConfig.messengerUrl`. When a customer clicks "Inquire", it will prefill the product name and size in the chat.

If the URL is empty, the site will show a fallback alert prompting configuration.

## Price Handling

Prices are stored in `src/data/products.ts`. If `price` is `null`, both the product cards and price list display "Message us for price". This ensures no fabricated prices are shown.

## License

MIT
