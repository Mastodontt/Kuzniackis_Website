import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

 const Banner = () =>{

  const data = useStaticQuery(graphql`
    query {
      Picture1: file(relativePath: { eq: "image0.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    
    }
   `)

  
  return(
    <section className="main">
      <div className="row">
          
          <Img fluid={data.Picture1.childImageSharp.fluid} /> 
          
      </div>
         
          
    </section>
)

}

export default Banner