import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

 const Banner = () =>{

  const data = useStaticQuery(graphql`
    query {
      Picture1: file(relativePath: { eq: "image0.jpeg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    
    }
   `)

  
  return(
    <section className="main">
      <div className="row">
          <p>
          <Img fixed={data.Picture1.childImageSharp.fixed} /> 
          </p>
      </div>
         
          
    </section>
)

}

export default Banner