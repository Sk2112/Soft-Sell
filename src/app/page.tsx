import { ChatWidget, ContactForm, HeroSection, HowItWorks, Testimonials, ThemeToggle, WhyChooseUs } from "./components";



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


