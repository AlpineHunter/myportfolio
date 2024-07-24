import About from '@/components/About';
import Certification from '@/components/Certification';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TopButton from '@/components/TopButton';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <TopButton />
    </>
  );
}
