// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
import Footer from "../../components/footer/Footer";
// Diseño, estilo & iconos ---
import "./ventasDiarias.css"
import { Divider } from 'antd'
import NuevaVenta from '../../components/2-Ventas/nuevaVenta/NuevaVenta'
import TablaVenta from '../../components/2-Ventas/tablaVenta/TablaVenta'
import FiltroVenta from '../../components/2-Ventas/filtroVenta/FiltroVenta';
// ##### Pages: Función General ###############################################
const VentasDiarias = () => {

    // ##### Pages: Render ######################################
    return (
        <div className='main-box'>
            <div>
                <h2>Ventas Diarias</h2>
                 <Divider style={{ borderColor: 'var(--color-main)',
                                                  borderWidth: '2px',
                                                  margin: '0.6rem 0' }} />
            </div>
            <div className='section-menu-container --flex-start'>
                <NuevaVenta /> 
                <FiltroVenta />
            </div>
            <div>
                <TablaVenta />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
    // ##########################################################
}
// ###########################################################################
export default VentasDiarias
