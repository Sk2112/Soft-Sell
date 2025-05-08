import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';

import HowItWorks from './components/HowitWorks';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from './components/ChatWidget';

export default function Home() {
  return (
    <main>
      <ThemeToggle/>
      <HeroSection />
      <ChatWidget/>
      <HowItWorks/>
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
