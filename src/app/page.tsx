import Hero from "@/components/widgets/Hero";
import Specialist from "@/components/widgets/Specialist";
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="bg-yellow-100">
      {/* Hero section */}
      <Hero/>
      {/* specialist section */}
      <Specialist/>
      <Footer/>


    </main>
  );
}
