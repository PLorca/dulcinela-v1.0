// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
import Footer from '../../components/footer/Footer';
// Diseño, estilo & iconos ---
import "./Facturas.css"
import { Divider } from 'antd';
import NuevaFactura from '../../components/4-facturas/nuevaFactura/NuevaFactura'
import TabalaFactura from '../../components/4-facturas/tablaFacturas/TablaFacturas'
import FiltroFactura from '../../components/4-facturas/filtroFacturas/Filtrofacturas'

// ##### Pages: Función General ###############################################
const Facturas = () => {
  
    // ##### Pages: Render ######################################  
  return (
    <div className='main-box'>
        <div>
            <h2>Facturas </h2>
            <Divider style={{ borderColor: 'var(--color--main)' ,
                                            borderWidth: '2px' ,
                                            margin: '0.6rem 0' }}/>                                    
        </div>
        <div className='section-menu-container --flex-start'>
            <NuevaFactura />
            <FiltroFactura />
        </div>
        <div>
            <TabalaFactura />
        </div>
        <div>
            <Footer />
        </div>   
    </div>
  )
   // ##########################################################
}
// ###########################################################################
export default Facturas
