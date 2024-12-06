// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
// Diseño, estilo & iconos ---
import LogoutImg from "../../../assets/icons-img/logout.png"
import { useNavigate } from 'react-router-dom'
// #######################################################################
// --- Componente: Función General ---
const Layout = ({ children }) => {
    const navigate = useNavigate();
    // ##############################################
    // --- Componente: Render ---
    return (
        <>
            <Navbar />
            <div className='layout-container'>
                {children}
            </div>
            <div className='logout-box' onClick={() => navigate("/")}>
                <img src={LogoutImg} alt='Imagen para salir del sistema' />
            </div>
            <Footer />
        </>
    )
    // ##############################################
}
// #######################################################################
export default Layout
