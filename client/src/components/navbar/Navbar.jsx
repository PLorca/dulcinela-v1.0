import React from "react"
import Logo from "../../assets/LogoPNG.png"
import "./Navbar.css"

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="header-box">
                <img src={Logo} alt="Logo Dulcinela"/>
                <h2>Dulcinela Amasanderia</h2>
            </div>
        </div>
    )
}

export default Navbar