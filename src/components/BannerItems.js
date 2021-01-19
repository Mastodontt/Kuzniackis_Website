import React ,{useState,useEffect}from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BannerItems = () =>{


  // do dokonczenia
  const [posts,setPosts] = useState([])

  useEffect(() =>{
    const getPosts = async () =>{
      const response = await fetch('http://localhost:1337/posts');
      const data = await response.json();
      setPosts(data);
    }
     getPosts();
   },[])

   


    const data = useStaticQuery(graphql`
    query {
      Picture1: file(relativePath: { eq: "image4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Picture2: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Picture3: file(relativePath: { eq: "image3.jpg" }) {
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
       
     
      <div className="row2">
          <div className="BannerInfo"> 
            <h1>An exploration in color and texture.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Euismod elementum nisi quis eleifend quam. Vitae ultricies leo integer malesuada. Eu augue ut lectus arcu bibendum at. Non curabitur gravida arcu ac tortor dignissim.</p>
            <p className="UnderLine">Learn More</p>
          </div>
         <div className="BannerItems">
         <p className="Bimages"  > <Img fluid={data.Picture1.childImageSharp.fluid} /> </p> 
         <div className="Bannertext">
         <h1>Canvas Drip / 1 of 3</h1>
             <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
             <p className="Button">Purchase a print</p>
         </div>  
           
         </div>
         <div className="BannerItems">
         <p className="Bimages"> <Img fluid={data.Picture2.childImageSharp.fluid} /> </p>
            <div className="BannertextRev">

                <h1>Canvas Drip / 2 of 3</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
                <p className="Button">Purchase a print</p>
            </div>                  
         </div>
         <div className="BannerItems">
         <p className="Bimages" > <Img  fluid={data.Picture3.childImageSharp.fluid} /> </p>
         <div className="Bannertext">
                <h1>Canvas Drip / 3 of 3</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
                <p className="Button">Purchase a print</p>
        </div>          
       
         </div>
    
       
        
          
      </div>
         
      
    </section>

  
)
}

export default BannerItems