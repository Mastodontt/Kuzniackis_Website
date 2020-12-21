import React from "react"

import Nav from "../components/nav"

const Layout = (props) =>{

    return(
        <div>
            <Nav/>
             {props.children}
        </div>
           
    )
}


export default Layout

