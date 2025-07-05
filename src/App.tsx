import Index from "./pages/Index";
import TrustedSection from "@/components/TrustedSection/TrustedSection.tsx";
import ServicesSection from '@/Components/ServicesSection/ServicesSection.tsx';
import WhyChooseUs from '@/Components/WhyChooseUs/WhyChooseUs.tsx';
import Differentiators from '@/Components/Differentiators/Differentiators.tsx';
import TechnologiesSection from '@/Components/TechnologiesSection/TechnologiesSection.tsx';
import ProcessSteps from '@/Components/ProcessSteps/ProcessSteps.tsx';
import FAQSection from '@/Components/FAQs/FAQSection.tsx';
import Footer from '@/Components/Footer/Footer.tsx';

const App = () => (

  <div className=" ">
    <Index/>
    <TrustedSection/>
         <ServicesSection/>
      <WhyChooseUs/>
      <Differentiators/>
      <TechnologiesSection/>
      <ProcessSteps/>
      <FAQSection/>
      <Footer/>

  </div>
);

export default App;
