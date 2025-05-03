import About from "@/Components/About/About";
import Appoinment from "@/Components/Appoinment/Appoinment";
import Counter from "@/Components/Counter/Counter";
import Features from "@/Components/Features/Features";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import Services from "@/Components/Services/Services";
import BookList from "@/Components/book/book";
import Gallery from "@/Components/gallery/gallery";
import Testimonial from "@/Components/Testimonial/Testimonial";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {

  return (
    <div className="main mt-[10vh]">
      <HeroBanner />
      <Features />
      <About />
      <Testimonial />
      <Counter/>
      <Services />
      <Gallery />
      <BookList />
      <Appoinment />
    </div>
  );
}
