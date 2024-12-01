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
                <h3>En desarrollo...</h3>
                <p><i>*Recuerda cambiar el diseño compelto, al del Login.</i></p>
                <br/>
                <p>Lugar donde van los botones de navegación del sistema, por lo que header debe ser algo simbolico o encontrar con que rellenarlo.</p>
            </div>
            <Footer />
        </div>
    )
    // ##############################################
}
// #######################################################################
export default Home // Exportación