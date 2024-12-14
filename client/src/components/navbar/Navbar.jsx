// Dependencias principales ---
import React from "react"
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import Logo from "../../assets/LogoPNG.png"
import BorderTop from "../../assets/borders/border-top.png"
import "./Navbar.css"
// #######################################################################
// --- Componente: Función General ---
const Navbar = () => {

    // ##############################################
    // --- Componente: Render ---
    return (
        <>
        <div className="navbar">
            <div className="header-box">
                <img src={Logo} alt="Logo Dulcinela"/>
                <h2>Dulcinela Amasandería</h2>
            </div>
        </div>
        <div className='deco-border-top nav-border'>
            <img src={BorderTop} alt='Borde superior - decoración' />
        </div>
        </>
        
    )
    // ##############################################
}
// #######################################################################
export default Navbar // Exportación