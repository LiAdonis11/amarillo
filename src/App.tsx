import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import PriceList from "./components/PriceList";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import DeliveryInfo from "./components/DeliveryInfo";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <PriceList />
        <WhyChooseUs />
        <Testimonials />
        <InquiryForm />
        <DeliveryInfo />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
