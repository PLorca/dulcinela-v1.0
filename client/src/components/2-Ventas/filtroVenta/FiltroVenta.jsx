// Dependencias principales ---
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import { ClearOutlined, SettingOutlined } from '@ant-design/icons';
// ##### Component: Función General ###############################################

const FiltroVenta = () => {

    // ===== MODAL ======================================================}
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modalText, setModalText] = useState(false);

    const showModal = async () => { // --- Modal: Mostrar
      setLoading(true);
      setOpen(true);

      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }

    const handleOk = async () => { // --- Modal: Al apretar "Aceptar"
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

    const handleCancel = async () => {  // --- Modal: Al apretar "Cancelar"
      setOpen(false);
    };
    // ==================================================================

    // ===== Limpiar Filtro ========================================
    const limpiarFiltro = () => {
      // setFilterData(initialState)
        // setResultCount(0)
        // setTimeout( async () => {
        //     await dispatch(getFilteredDocsCompra(filterData))
        //     await dispatch(getDocsCompra(selectedMonth))
        // }, 600);
        console.log("Filtro Limpiado");
    }
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
              title="Filtro Avanzado - Libro de Ventas"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              cancelButtonProps={{ disabled: confirmLoading }}
              onCancel={handleCancel}
              okText='Aceptar'
              cancelText='Cancelar'
              loading={loading}
              width={800}
          >
                {!modalText ? (
                    <p>Filtro ......</p>
                ) : (
                    <p>Aplicando el Filtro .....</p>
                ) }
          </Modal>
        </div>
    )
  // ##########################################################
}
// ###########################################################################
export default FiltroVenta
