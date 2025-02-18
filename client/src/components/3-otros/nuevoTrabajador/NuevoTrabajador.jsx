// Dependencias principales ---
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
// Diseño, estilo & iconos ---
import { PlusSquareOutlined } from '@ant-design/icons'
import ForNuevoTrabajador from './FormNuevoTrabajador';
// ##### Component: Función General ###############################################
const NuevoTrabajador = () => {
    const [formData, setFormData] = useState();
    // ===== MODAL ======================================================
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modalText, setModalText] = useState(true);

    const showModal = async () => { // --- Modal: Mostrar
        setLoading(true);
        setOpen(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleOk = async () => { // --- Modal: Al apretar "Aceptar"
        setModalText(true);
        setConfirmLoading(true);

        console.log(formData); // log- y luego TAB

        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            setModalText(false);
        }, 1000);
    };

    const handleCancel = async () => { // --- Modal: Al apretar "Cancelar"
        setOpen(false);
    };

    // ==================================================================

    // ##### Component: Render ###################################
    return (
        <div>
            <Button className='--btn-principal' onClick={showModal}>
                <PlusSquareOutlined /> Nuevo/a Trabajador/a 
            </Button>
            <Modal
                title= "Registro de Trabajadores nuevos"
                open= {open}
                onOk={handleOk}
                confirmLoading= {confirmLoading}
                cancelButtonProps={{disabled: confirmLoading}}
                onCancel={handleCancel}
                okText= 'Aceptar'
                cancelText= 'Cancelar'
                loading= {loading}
                width={1000}
            >
                { !modalText ? (
                    <ForNuevoTrabajador formData={formData} setFormData={setFormData} />
                ) : (
                    <p>Registrando nuevo trabajador/a en el sistema........</p>
                ) }
            </Modal>
        </div>
    )
     // ###########################################################
}
// ################################################################################
export default NuevoTrabajador
