/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import BeforeAfter from './components/BeforeAfter';
import Technology from './components/Technology';
import Pricing from './components/Pricing';
import TurboClean from './components/TurboClean';
import Restorations from './components/Restorations';
import Customization from './components/Customization';
import FAQ from './components/FAQ';
import Units from './components/Units';
import LaundrySection from './components/LaundrySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <HowItWorks />
        <BeforeAfter />
        <Technology />
        <Pricing />
        <TurboClean />
        <Restorations />
        <Customization />
        <FAQ />
        <Units />
        <LaundrySection />
      </main>
      <Footer />
    </div>
  );
}
