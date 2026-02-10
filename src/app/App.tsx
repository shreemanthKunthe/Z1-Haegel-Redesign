import React from "react";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { HowItWorks } from "./components/HowItWorks";
import { Opportunities } from "./components/Opportunities";
import { Mentors } from "./components/Mentors";
import { Testimonials } from "./components/Testimonials";
import { JoinUs } from "./components/JoinUs";
import { Footer } from "./components/Footer";

export default function App() {
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
