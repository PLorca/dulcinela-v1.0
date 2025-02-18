// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
import Footer from "../../components/footer/Footer";
// Diseño, estilo & iconos ---\
import "./Otros.css"
import { Divider } from 'antd'
import TablaTrabajador from '../../components/3-otros/tablaTrabajador/TablaTrabajador'
import NuevoTrabajador from '../../components/3-otros/nuevoTrabajador/NuevoTrabajador'
import FiltroTrabajador from '../../components/3-otros/filtroTrabajador/FiltroTrabajador'
// ##### Pages: Función General ###############################################
const Otros = () => {
  return (
    <div className='main-box'>
      <div>
            <h2>Trabajadores</h2>
            <Divider style={{ borderColor: 'var(--color-main)',
                              borderWidth: '2px',
                                  margin: '0.6rem 0' }}  />        
      </div>
      <div className='section-menu-container --flex-start'>
                <NuevoTrabajador/>
                <FiltroTrabajador/>
      </div>
      <div>
                <TablaTrabajador />
      </div>
      <div>
                <Footer />
      </div>
    </div>
  )
  // ##########################################################
}
// ###########################################################################
export default Otros
