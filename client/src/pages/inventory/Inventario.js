// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import "./Inventario.css"
import { Divider } from 'antd'
import NuevoProducto from '../../components/1-Inventario/nuevoProducto/NuevoProducto'
import TablaInventario from '../../components/1-Inventario/tablaInventario/TablaInventario'
import FiltroInventario from '../../components/1-Inventario/filtroInventario/FiltroInventario'
// ##### Pages: Función General ###############################################
const Inventario = () => {

    // ##### Pages: Render ######################################
    return (
        <div className='main-box'>
            <div>
                <h2>Inventario</h2>
                <Divider style={{ borderColor: 'var(--color-main)',
                                  borderWidth: '2px',
                                  margin: '0.6rem 0' }} />
            </div>
            <div className='section-menu-container --flex-start'>
                <NuevoProducto />
                <FiltroInventario />
            </div>
            <div>
                <TablaInventario />
            </div>
        </div>
    )
    // ##########################################################
}
// ###########################################################################
export default Inventario
