// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
import Footer from "../../components/footer/Footer";
// Diseño, estilo & iconos ---
import "./Home.css"
import DulcinelaLogo from "../../assets/DulcinelaLogo.jpg";
import InfoImg from "../../assets/Info-img.jpg";
import LoginAdmin from '../../components/loginAdmin/LoginAdmin';
import LoginWorker from '../../components/loginWorker/LoginWorker';
// #######################################################################
// --- Pages: Función General ---
const Home = () => {
    
    // ##############################################
    // --- Pages: Render ---
    return (
        <div>
            {/* <Navbar /> */}
            <div className='main-box'>
                <div className='logo-box'>
                    <img src={DulcinelaLogo} alt="Logo - Dulcinela Amasanderia" />
                </div>
                <div className='buttons-box'>
                    <LoginAdmin />
                    <LoginWorker />
                </div>
                <div className='info-box'>
                    <div className='info-box-text'>
                        <h2>Sistema de gestión de Negocios - Dulcinela Amasandería</h2>
                        <p><b>Propietaria:</b> Marianela Lorca Catalán</p>
                        <br />
                        <br />
                        <span><b>Que tengas un gran día de Trabajo!</b></span><i> - HellFire Code</i>
                    </div>
                    <img src={InfoImg} alt="Logo - Dulcinela Amasanderia" />
                </div>
            </div>
            <Footer />
        </div>
    )
    // ##############################################
}
// #######################################################################
export default Home // Exportación