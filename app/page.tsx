"use client"
import AboutSection from "./components/bintoGrid/AboutSection";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/ourServices/OurServices";
import PartnerShowcaseSection from "./components/partnerSection/PartnerShowcaseSection";
import WorkProcess from "./components/workflow/WorkProcess";
import Testimonials from "./components/clientFeedback/Testimonials";
import ProjectSection from "./components/projectInfo/ProjectSection";
import ContactUs from "./components/contactUs/ContactUs";


export default function Home() {
  const handleBecomePartner = () => {
    alert("Partner application started!");
  };
   
  return (
   <div className="bg-black">
    <HeroSection/>
    <PartnerShowcaseSection
        title="Our Trusted Partners"
        highlightText="Powering Innovation Together"
        buttonText="Learn More"
        onButtonClick={handleBecomePartner}
      />
      <WorkProcess/>
      <OurServices/>
      <AboutSection/>
      <ProjectSection/>
      <Testimonials/>
      <ContactUs/>
   </div>
  );
}
