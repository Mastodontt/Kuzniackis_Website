import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NavMobileMenu = () =>{
    return(
        <Layout>
            <ul className="container">
                <li>
                    All Prints
                </li>
                <li>
                    Process
                </li>
                <li>
                    About
                </li>
            </ul>
        </Layout>
    )
}

export default NavMobileMenu