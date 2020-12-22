import React,{useEffect} from "react"

import { Link } from "gatsby"
import Nav from "../components/nav"
import Banner from "../components/Banner"

import SEO from "../components/seo"
import Layout from "../components/Layout"

const IndexPage = () => {

  useEffect(() =>{
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
  },[])

  return(
  <div className="Website">
    <SEO title="Home" />
    <Layout>
      <Banner/>
     
    </Layout>
   
  
   
      
  </div>
  )

}
  




export default IndexPage
