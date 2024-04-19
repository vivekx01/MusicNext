import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs></WhyChooseUs>
      <TestimonialCards></TestimonialCards>
      <UpcomingWebinars></UpcomingWebinars>
      {/* <Instructors></Instructors> */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
