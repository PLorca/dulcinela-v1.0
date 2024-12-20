// Dependencias principales ---
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import { PlusSquareOutlined } from '@ant-design/icons'
import FormNuevoProducto from './FormNuevoProducto';
// ##### Component: Función General ###############################################
const NuevoProducto = () => {
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

        console.log(formData);

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
        <>
            <Button className='--btn-principal' onClick={showModal}>
                <PlusSquareOutlined /> Nuevo Producto
            </Button>
            <Modal
                title="Registro de nuevo Producto"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                cancelButtonProps={{ disabled: confirmLoading }}
                onCancel={handleCancel}
                okText='Aceptar'
                cancelText='Cancelar'
                loading={loading}
                width={1000}
            >
                { !modalText ? (
                    <FormNuevoProducto formData={formData} setFormData={setFormData}/>
                ) : (
                    <p>Registrando nuevo Producto en el Sistema...</p>
                ) }
            </Modal>
        </>
    )
    // ###########################################################
}
// ################################################################################
export default NuevoProducto
