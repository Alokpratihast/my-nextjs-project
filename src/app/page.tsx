import Herosection from "@/Component/Herosection";
import Instructor from "@/Component/Instructor";
import Mentors from "@/Component/Mentors";
import FeaturedCourse from "@/Component/Ui/Featuredsection";
import Footer from "@/Component/Ui/Footer";
import WhyChooseus from "@/Component/Ui/WhyChooseus";
import Upcomingevents from "@/Component/Upcomingevents";
import Webcoursecard from "@/Component/Webcoursecard";

export default function Home() {
  return (
   
    <main className="mini-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <h1 className="text-3xl text-center text-white"></h1>
      <Herosection/>
      <FeaturedCourse/>
      <WhyChooseus/>
      <Webcoursecard/>
      <Upcomingevents/>
      <Instructor/>
      <Footer/>
    </main>
    
  
    
  );
}
