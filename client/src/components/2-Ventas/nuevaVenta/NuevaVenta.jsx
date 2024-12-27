// Dependencias principales ---
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
// Diseño, estilo & iconos ---
import { PlusSquareOutlined } from '@ant-design/icons'
import FormNuevaVenta from './FormNuevaVenta';
// ##### Component: Función General ###############################################
const NuevaVenta = () => {
    const [formData, setFormData] = useState();
    // ===== MODAL ======================================================
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modalText, setModalText] = useState(false);

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

    const handleCancel = async () => {  // --- Modal: Al apretar "Cancelar"
        setOpen(false);
    };

    // ==================================================================

    // ##### Component: Render ###################################
    return (
        <> {/* parentesis para devolver mas de un elementos shift+alt+A*/}
            <Button className='--btn-principal' onClick={showModal}>
                <PlusSquareOutlined /> Nueva Venta
            </Button>
            <Modal
                title="Registro de nueva venta"
                open = {open}
                onOk={handleOk}
                confirmLoading = {confirmLoading}
                cancelButtonProps={{disabled: confirmLoading}}
                onCancel={handleCancel}
                okText= 'Aceptar'
                cancelText= 'Cancelar'
                loading={loading}
                width={1000}
            >
                { !modalText ? (
                    <FormNuevaVenta formData={formData} setFormData={setFormData} />
                ) : (
                    <p>Registrando nueva venta en el sistema.....</p>
                ) }
            </Modal>
        </>
    )
     // ###########################################################
}
// ################################################################################
export default NuevaVenta
