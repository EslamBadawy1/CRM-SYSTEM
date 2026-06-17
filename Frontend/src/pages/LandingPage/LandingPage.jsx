

import LandNavbar from "../../components/layout/Navbar/LandNavbar";
import Hero from "../../components/landing/Hero/Hero";
import Features from "../../components/landing/Features/Features";
import LeadForm from "../../components/landing/LeadForm/LeadForm";
import Statistics from "../../components/landing/Statistics/Statistics";
import Testimonials from "../../components/landing/Testimonials/Testimonials";
import Footer from "../../components/layout/Footer/Footer";
export const LandingPage = () => {
  return (


    <>
      <LandNavbar />
      <Hero />
      <Features />
      <LeadForm />
      <Statistics />
      <Testimonials />
      <Footer />
    </>
  )
}

export default LandingPage;