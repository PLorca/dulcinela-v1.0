// Dependencias principales ---
import React, { useState } from 'react'
import { Modal } from 'antd'
import FormAdminLogin from '../formAdminLogin/FormAdminLogin';
import { useNavigate } from 'react-router-dom';
// #######################################################################
// ===== Component: Función General =====
const AdminLogin = () => {
    const [formData, setFormData] = useState();
    const navigate = useNavigate(); // Obtén la función de navegación
    
    // ##############################################
    // ===== Component: Render =====
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modalText, setModalText] = useState(false);

    // --- Modal ---
    const showModal = async () => {
        setLoading(true);
        setOpen(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleOk = async () => {
        setModalText(true);
        setConfirmLoading(true);

        console.log(formData);

        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            setModalText(false);
            
            navigate('/home'); // Navega al componente Home
        }, 1500);
    };

    const handleCancel = async () => {
        setOpen(false);
    };

    // === Html - Start ===
    return (
        <>
        <div className='box btn-login' onClick={showModal}>
            <span>Administrador</span>
        </div>
        <Modal title="Ingreso de Administrador"
               open={open}
               onOk={handleOk}
               confirmLoading={confirmLoading}
               cancelButtonProps={{ disabled: confirmLoading }}
               onCancel={handleCancel}
               okText='Ingresar'
               cancelText='Cancelar'
               loading={loading}
               width={600}
        >
            { !modalText ? (
                <FormAdminLogin formData={formData} setFormData={setFormData} />
            ) : (
                <p>Ingresando al Sistema de Gestión de Negocios - Dulcinela...</p>
            ) }
        </Modal>
        </>
    )
    // === Html - End ===
    // ##############################################
}
// #######################################################################
export default AdminLogin
