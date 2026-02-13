import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { HowItWorks } from "./components/HowItWorks";
import { Opportunities } from "./components/Opportunities";
import { Mentors } from "./components/Mentors";
import { Testimonials } from "./components/Testimonials";
import { JoinUs } from "./components/JoinUs";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <Hero />
      <Partners />
      <HowItWorks />
      <Opportunities />
      <Mentors />
      <Testimonials />
      <JoinUs />
      <Footer />
    </div>
  );
}
