import React,{useEffect} from "react"

import { Link } from "gatsby"
import Nav from "../components/nav"
import Banner from "../components/Banner"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  useEffect(() =>{
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
  },[])

  return(
  <div className="Website">
    <SEO title="Home" />
    <Nav/>
    <Banner/>
      
  </div>
  )

}
  




export default IndexPage
