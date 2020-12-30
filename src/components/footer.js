import React from "react"
import { Link } from "gatsby"

const Footer = () =>{
    return(
        <div className=" container ">
             <ul className="footerContainer">
                <li className="footerItem">Shop</li>
                <li className="footerItem">Process</li>
                <Link to="About">
                    <li className="footerItem">About</li>
                </Link>
              
                
              </ul>
        </div>
       
    )
}

export default Footer