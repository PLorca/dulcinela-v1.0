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

    const gotoVentasDiarias = () => {
        navigate("/ventasDiarias")
    }

    const goToOtros = () => {
        navigate("/otros")
    }

    const goToFacturas = () => {
        navigate("/facturas")
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
                <div className='btn btn2' onClick={gotoVentasDiarias}>
                    <h3>Ventas Diarias</h3>
                </div>
            </div>
            <div className='home-btns-box' style={{ marginBottom: "5rem"}}>
                <div className='btn btn2'onClick={goToFacturas}>
                    <h3>Facturas</h3>
                </div>
                <div className='btn btn2' onClick={goToOtros}>
                    <h3>Otros</h3>
                </div>
            </div>
        </div>
    )
    // ##############################################
}
// #######################################################################
export default Home // Exportación