import Hero from "./fonts/components/hero";
import Personalinfo from "./fonts/components/personalinfo"; 
import Hobby from "./fonts/components/hobby";
import Skills from "./fonts/components/skills";
import RiwayatPendidikan from "./fonts/components/RiwayatPendidikan";
import RiwayatPekerjaan from "./fonts/components/RiwayatPekerjaan";
import Contactform from "./fonts/components/contactform";
import "./en-style.css";



export default function CVonline() {
  return (
    <section>
      <Hero />
      <Personalinfo /> 
      <Hobby />
      <Skills />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      
      <Contactform />


    </section>
  )
}