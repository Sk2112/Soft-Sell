import { ChatWidget, ContactForm, HeroSection, HowItWorks, Testimonials, ThemeToggle, WhyChooseUs } from "./components";
import { ModeToggle } from "./components/ThemeToggle";



export default function Home() {
  return (
    <main>
      <div className="h-14 flex items-center"><ModeToggle/></div>
      <HeroSection />
      <ChatWidget/>
      <HowItWorks/>
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  );
}


