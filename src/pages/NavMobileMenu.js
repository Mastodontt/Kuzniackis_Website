import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NavMobileMenu = () =>{
    return(
        <Layout>
            <div className="container">
            </div>
            <ul className="Nav_container">
                <div className="row rowNav">
                    <li className="mobileNavItem">
                        All Prints
                    </li>
                    <li className="mobileNavItem">
                        Process
                    </li>
                    <li className="mobileNavItem">
                        About
                    </li>
                </div>
               
            </ul>
        </Layout>
    )
}

export default NavMobileMenu