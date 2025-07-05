import Index from "./pages/Index";
import TrustedSection from "../src/components/TrustedSection/TrustedSection";
import ServicesSection from "../src/components/ServicesSection/ServicesSection";
import WhyChooseUs from  '../src/components/WhyChooseUs/WhyChooseUs';
import Differentiators from '../src/components/Differentiators/Differentiators';
import TechnologiesSection from '../src/components/TechnologiesSection/TechnologiesSection';
import ProcessSteps from '../src/components/ProcessSteps/ProcessSteps';
import FAQSection from '../src/components/FAQs/FAQSection';
import Footer from '../src/components/Footer/Footer';

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
