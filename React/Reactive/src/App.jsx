import Hero from './components/hero/Hero';
import OurClasses from './components/our_classes/OurClasses';
import Trainers from './components/trainers/Trainers';
import Purchase from './components/purchase/Purchase';
import Bmi from './components/bmi/Bmi';
import Review from './components/review/Review';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';



function App() {

  return (
    <>
      <Hero />
      <OurClasses />
      <Bmi />
      <Trainers />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </>
  )
}

export default App
