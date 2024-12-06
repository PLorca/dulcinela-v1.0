// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// Diseño, estilo & iconos ---
import "./Home.css"
// #######################################################################
// --- Pages: Función General ---
const Home = () => {
    
    // ##############################################
    // --- Pages: Render ---
    return (
        <div>
            <Navbar />
            <div className='home-box'>
                <h1>Home Dashboard</h1>
                <div className='inventory-box'>
                    <h3>Inventario</h3> 
                </div>
            </div>
            <Footer />
        </div>
    )
    // ##############################################
}
// #######################################################################
export default Home // Exportación