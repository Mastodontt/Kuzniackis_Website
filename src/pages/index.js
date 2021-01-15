import React,{useEffect} from 'react'
import { Link } from "gatsby"
import Nav from "../components/nav"
import Banner from "../components/Banner"
import BannerItems from "../components/BannerItems"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Preloader from "../components/Preloader"

const IndexPage = () => {



  useEffect(() =>{
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
  },[])

  return(
  <div className="Website">
 
      






    <Layout>
      <SEO title="Home" />
      <Banner/>
      <BannerItems/>
    </Layout>
   
  
   
      
  </div>
  )

}
  




export default IndexPage
