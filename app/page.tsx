import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
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
