import Image from "next/image";
import Navbar from "./header/page";
import Homev1 from "./Homev1/hero-block";
import Features from "./Homev1/features";
import Listing1 from "./Homev1/listings";
import Listing2 from "./Homev1/listings2";
import Email from "./Homev1/email";
import Features2 from "./Homev1/features2";
import Footer from "./footer/page";


export default function Home() {
  return (
 <div>
  <Navbar/>
  <Homev1/> 
  <Features/>
  <Listing1/>
  <Listing2/>
  <Email/>
  <Features2/>
   <Footer/>
 </div>
  );
}
