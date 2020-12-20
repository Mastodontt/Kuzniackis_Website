
import React from "react"
import { Link } from "gatsby"

const Nav = () =>{

    return(
        <div className="Nav">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="navInfo">
                        <Link to="404">
                            <p>All Prints</p>
                        </Link>
                        <Link to="404">
                            <p>Process</p>
                        </Link>
                        <Link to="404">
                            <p>About</p>
                        </Link>
                    </div>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="logo">
                    <Link to="404">Kuzniacki</Link>
                    </div>
                    <div className="Shop">
                        <p>Shop</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Nav;