// Dependencias principales ---
import React from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import "./Footer.css"
import { PhoneTwoTone, } from '@ant-design/icons'
// #######################################################################
// --- Componente: Función General ---
const Footer = () => {

    const currentYear = new Date().getFullYear();

    // ##############################################
    // --- Componente: Render ---
    return (
        <footer>
            <div className='footer-text'>
                <div className='footer-item'>
                    <b>Gestor de Negocios pequeños</b>
                </div> 
                <span className='pipe-footer'>&nbsp;/&nbsp;</span>
                <div className='footer-item'>
                    Copyright&copy; {currentYear} HellFire Code - StartUp.
                </div>
                <span className='pipe-footer'>&nbsp;/&nbsp;</span>
                <div className='footer-item'>
                    Diseñado por:&nbsp;<a href='mailto:fpoblete.develop@gmail.com'>
                        <span className='footer-name'>
                            <span style={{ fontSize: "15px" }}>&#40;</span>
                            Felipe Poblete
                        </span> | 
                        <PhoneTwoTone style={{ marginLeft: "0.3rem" }} twoToneColor="#fa541c" />
                            <span className='footer-phone'>+56 9 3186 1244
                            <span style={{ fontSize: "15px" }}>&#41;</span>
                        </span>
                    </a>
                    <span className='pipe-footer'>&nbsp;&&&nbsp;</span>
                    <a href='mailto:pmatias.poblete@gmail.com'>
                        <span className='footer-name'>
                            <span style={{ fontSize: "15px" }}>&#40;</span>
                            Pablo Poblete
                        </span> | 
                        <PhoneTwoTone style={{ marginLeft: "0.3rem" }} twoToneColor="#fa541c"/>
                        <span className='footer-phone'> +56 9 2631 9136 </span>
                        <span style={{ fontSize: "15px" }}>&#41;</span>
                    </a>
                </div>       
            </div>
        </footer>
    )
    // ##############################################
}
// #######################################################################
export default Footer
