import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  businessName: z.string().optional(),
  contactNumber: z.string().min(8, "Please provide a valid contact number"),
  email: z.string().email("Please provide a valid email").optional().or(z.literal("")),
  inquiryType: z.enum(["Wholesale", "Reseller", "Retail"]),
  productsOfInterest: z.string().min(1, "Please select or specify products"),
  estimatedOrderQuantity: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export default function InquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      inquiryType: "Retail",
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsLoading(true);
    try {
      if (siteConfig.messengerUrl) {
        const message = `Hi ${siteConfig.brandName}!
        
Inquiry Type: ${data.inquiryType}
Name: ${data.fullName}
${data.businessName ? `Business: ${data.businessName}` : ""}
Contact: ${data.contactNumber}
${data.email ? `Email: ${data.email}` : ""}
Products: ${data.productsOfInterest}
${data.estimatedOrderQuantity ? `Estimated Qty: ${data.estimatedOrderQuantity}` : ""}
Message: ${data.message}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`${siteConfig.messengerUrl}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
        setIsSubmitted(true);
        reset();
      } else {
        alert("Please configure the Messenger URL in siteConfig to send inquiries.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Interested in Wholesale or Reselling?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Looking to purchase in bulk or explore reseller opportunities? Send us your details so we can discuss available products and pricing.
          </p>
        </div>
        {isSubmitted ? (
          <div className="bg-cream border border-primary/30 rounded-2xl p-8 text-center">
            <div className="text-primary-dark mb-4 flex justify-center">
              <Send size={48} />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">Inquiry Sent!</h3>
            <p className="text-muted mb-6">
              Thank you for your interest. We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-primary hover:bg-primary-dark text-charcoal px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-charcoal mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  {...register("fullName")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Juan Dela Cruz"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-charcoal mb-2">
                  Business or Store Name (optional)
                </label>
                <input
                  id="businessName"
                  type="text"
                  {...register("businessName")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your Store Name"
                />
              </div>
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-semibold text-charcoal mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="contactNumber"
                  type="tel"
                  {...register("contactNumber")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="09XX XXX XXXX"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                  Email Address (optional)
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-charcoal mb-2">
                  Inquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  {...register("inquiryType")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="Retail">Retail</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="Reseller">Reseller</option>
                </select>
              </div>
              <div>
                <label htmlFor="productsOfInterest" className="block text-sm font-semibold text-charcoal mb-2">
                  Products of Interest <span className="text-red-500">*</span>
                </label>
                <input
                  id="productsOfInterest"
                  type="text"
                  {...register("productsOfInterest")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="e.g., 1L, 1 Gallon, 2.55KG"
                />
                {errors.productsOfInterest && (
                  <p className="text-red-500 text-sm mt-1">{errors.productsOfInterest.message}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="estimatedOrderQuantity" className="block text-sm font-semibold text-charcoal mb-2">
                  Estimated Order Quantity (optional)
                </label>
                <input
                  id="estimatedOrderQuantity"
                  type="text"
                  {...register("estimatedOrderQuantity")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="e.g., 10 cases, 100 bottles"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-charcoal px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <MessageCircle size={18} />
                {isLoading ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
            <p className="text-xs text-muted text-center mt-4">
              Inquiries will be sent via Messenger if configured. All information is handled with care.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
