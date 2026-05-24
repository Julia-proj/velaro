import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompareSection from '@/components/CompareSection';
import Services from '@/components/Services';
import Compromiso from '@/components/Compromiso';
import Tecnologia from '@/components/Tecnologia';
import Proceso from '@/components/Proceso';
import Calculator from '@/components/Calculator';
import Resenas from '@/components/Resenas';
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
        <CompareSection />
        <Services />
        <Compromiso />
        <Tecnologia />
        <Proceso />
        <Calculator />
        <Resenas />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
