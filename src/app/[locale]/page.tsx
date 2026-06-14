import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBand from '@/components/TrustBand';
import CompareSection from '@/components/CompareSection';
import Services from '@/components/Services';
import SolarSpotlight from '@/components/SolarSpotlight';
import Precios from '@/components/Precios';
import Compromiso from '@/components/Compromiso';
import Tecnologia from '@/components/Tecnologia';
import Proceso from '@/components/Proceso';
import Calculator from '@/components/Calculator';
import Faq from '@/components/Faq';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <Services />
        <SolarSpotlight />
        <CompareSection />
        <Precios />
        <Calculator />
        <Compromiso />
        <Tecnologia />
        <Proceso />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
