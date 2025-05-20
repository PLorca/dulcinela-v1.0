// Dependencias principales ---
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import { ClearOutlined, SettingOutlined } from '@ant-design/icons';
// ##### Component: Función General ###############################################
const Filtrofacturas = () => {

  // ===== MODAL ======================================================}
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalText, setModalText] = useState(false);

  const showModal = async () => {
    setLoading(true);
    setOpen(true);

    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }

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
  }

  const limpiarFiltro = () => {
    // setFilterData(initialState)
      // setResultCount(0)
      // setTimeout( async () => {
      //     await dispatch(getFilteredDocsCompra(filterData))
      //     await dispatch(getDocsCompra(selectedMonth))
      // }, 600);
    console.log("Filtro limpiado!!!!");
  }

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
        title="Filtro Avanzado - Libro de Facturas"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        cancelButtonProps={{ disabled: confirmLoading}}
        onCancel={handleCancel}
        okText= 'Aceptar'
        cancelText= 'Cancelar'
        loading={loading}
        width={800} 
      >
        {!modalText ? (
            <p>Filtro...........</p>
        ) : (
            <p>Aplicando el filtro...........</p>
        ) }  
      </Modal>
    </div>
  )
  // ##########################################################
}
// ###########################################################################
export default Filtrofacturas
