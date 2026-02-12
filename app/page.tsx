import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <InvestmentThesis />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
