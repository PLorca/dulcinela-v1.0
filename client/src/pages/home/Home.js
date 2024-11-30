// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// Diseño, estilo & iconos ---
import "./Home.css"
import AdminLogin from '../../components/adminLogin/AdminLogin';
// #######################################################################
// --- Pages: Función General ---
const Home = () => {
    
    // ##############################################
    // --- Pages: Render ---
    return (
        <div>
            <Navbar />
            <div className='main-box'>
                <AdminLogin />
                {/* <Workerlogin />  - Compoente para que ingrese un trabajador*/}
            </div>
            <Footer />
        </div>
    )
    // ##############################################
}
// #######################################################################
export default Home // Exportación