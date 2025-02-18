// Dependencias principales ---
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import { ClearOutlined, SettingOutlined } from '@ant-design/icons';
// ##### Component: Función General ###############################################

const FiltroTrabajador = () => {

    // ===== MODAL ======================================================
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modalText, setModalText] = useState(false);

    const showModal = async() => {
        setLoading(true);
        setOpen(true);

        setTimeout(() => {
            setLoading(false);
        }, 6000);
    };

    const handleOk = async () => {
        setModalText(true);
        setConfirmLoading(true);

        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            setModalText(false);
        }, 1500);

        setConfirmLoading(false);
        setModalText(false);
    };

    const handleCancel = async () => {
        setOpen(false);
    };
    // ==================================================================

    // ===== Limpiar Filtro ========================================
    const limpiarFiltro = () => {
        console.log("Filtro limpiado!!!");
    };
    // =============================================================

    // ##### Component: Render ######################################
    return (
        <div>
            <Button className='--btn-secundario' onClick={showModal}>
                <SettingOutlined /> Filtro Avanzado
            </Button> 
            <Button className='--btn-secundario' onClick={limpiarFiltro}>
                <ClearOutlined />
            </Button>
            <Modal
                title= "Filtro - Libro de trabajadores"
                open = {open}
                onOk={handleOk}
                confirmLoading = {confirmLoading}
                cancelButtonProps={{ disabled: confirmLoading}}
                onCancel={handleCancel}
                okText= 'Aceptar'
                cancelText= 'Cancelar'
                loading={loading}
                width={800}
            >
                {!modalText ? (
                    <p>Filtro .......</p>
                ) : (
                    <p>Aplicando el filtro.........</p>
                ) }
            </Modal>
        </div>
    )
    // ##########################################################
}
// ###########################################################################
export default FiltroTrabajador
