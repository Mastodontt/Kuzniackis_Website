
import React from "react"
import { Link } from "gatsby"
import MenuIcon from '@material-ui/icons/Menu';
const Nav = () =>{

    return(
        <div className="Nav">
            <div className="container">
                <div className="row v-center space-between">
                    <MenuIcon/>
                    <div className="logo">
                    <Link to="404">Agency</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Nav;