import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Header scrolled={scrolled} />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <PricingSection />
      <Footer />
    </Box>
  );
}
