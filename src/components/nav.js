
import React from "react"
import { Link } from "gatsby"

const Nav = () =>{

    return(
        <div className="Nav">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="Nav_Info">
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
                    <div className="Nav_hamburger">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="Nav_logo">
                    <Link to="404">Kuzniacki</Link>
                    </div>
                    <div className="Nav_Shop">
                        <p>Shop</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Nav;