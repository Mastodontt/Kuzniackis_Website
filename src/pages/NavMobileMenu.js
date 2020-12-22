import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NavMobileMenu = () =>{
    return(
        <Layout>
          <div className="container ">
              <div className="main">
                  <ul className="navElements">
                      <li className="navElement">All prints</li>
                      <li className="navElement">Process</li>
                      <li className="navElement">About</li>
                  </ul>
              </div>
          </div>
        </Layout>
    )
}

export default NavMobileMenu