import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

 const Banner = () =>{

  const data = useStaticQuery(graphql`
    query {
      Picture1: file(relativePath: { eq: "image0.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    
    }
   `)

  
  return(
    <section className="container main">
      <div className="row">
        <p className="Bimages"> <Img fluid={data.Picture1.childImageSharp.fluid} /> </p>        
        
          
      </div>
         
          
    </section>
)

}

export default Banner