

import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
const About = () =>{

    return(
        <div className="container main">
             <Layout>
                 <div className="AboutInfo">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Euismod elementum nisi quis eleifend quam. Vitae ultricies leo integer malesuada. Eu augue ut lectus arcu bibendum at. Non curabitur gravida arcu ac tortor dignissim. Fermentum et sollicitudin ac orci. Volutpat est velit egestas dui id ornare arcu odio ut. Donec ultrices tincidunt arcu non sodales neque. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.</p>
                    <p className="email">fryderyk.kuzniacki@gmail.com</p>
                    <Link to="https://www.instagram.com/rvndomlines/">
                        <p className="instagram">instagram</p>
                    </Link>
                   
                 </div>
            
             </Layout>
         
        </div>
       
    )
}


export default About