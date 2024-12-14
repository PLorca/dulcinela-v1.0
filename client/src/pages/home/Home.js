// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import "./Home.css"
import { useNavigate } from 'react-router-dom';
// #######################################################################
// --- Pages: Función General ---
const Home = () => {

    const navigate = useNavigate(); // Obtén la función de navegación

    const goToInventory = () => {
        navigate("/inventario")
    }

    // ##############################################
    // --- Pages: Render ---
    return (
        <div className='home-box'>
            <h1>Gestor de Negocios</h1>
            <div className='home-btns-box' style={{ marginTop: "5rem"}}>
                <div className='btn btn2' onClick={goToInventory}>
                    <h3>Inventario</h3> 
                </div>
                <div className='btn btn2'>
                    <h3>Ventas Diarias</h3>
                </div>
            </div>
            <div className='home-btns-box' style={{ marginBottom: "5rem"}}>
                <div className='btn btn2'>
                    <h3>Facturas</h3>
                </div>
                <div className='btn btn2'>
                    <h3>Otros</h3>
                </div>
            </div>
        </div>
    )
    // ##############################################
}
// #######################################################################
export default Home // Exportación