import Navbar from "./(store)/component/header"
import Homev1 from "./(store)/Homev1/hero-block";
import Features from "./(store)/Homev1/features";
import Listing1 from "./(store)/Homev1/listings";
import Listing2 from "./(store)/Homev1/listings2";
import Email from "./(store)/Homev1/email";
import Features2 from "./(store)/Homev1/features2";
import Footer from "./(store)/component/footer";
import {client} from "@/sanity/lib/client";

const getProducts = async () =>{
  const products = await client.fetch(
    `
    *[_type=="product"][0..4]{
    _id,
    name,
    description,
    quantity,
    price,
    "image_url":image.asset->url,
    rating
    }
    `
  )
  return products
}

export default async function Home() {
 const products = await getProducts()
  console.log(products)
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
