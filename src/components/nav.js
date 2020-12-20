
import React from "react"
import { Link } from "gatsby"

const Nav = () =>{

    return(
        <div className="Nav">
            <div className="container">
                <div className="row v-center space-between">
                    
                    <div className="logo">
                    <Link to="404">Agency</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Nav;