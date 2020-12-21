import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () =>{
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "image0.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  /*

   <h2>
                        <div className="line">
                            <span>Creating unique brand is</span>
                        </div>
                        <div className="line">
                            <span>what we do</span>
                        </div>

                        */


    return(
        <section className="main">
            <div className="container">
                <div className="row firstPageContainer">   
                       
                        <p className="picContainer">
                          <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
                        </p>          
                </div>
            </div>
        </section>
    )
}
export default Banner