// Dependencias principales ---
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
// Diseño, estilo & iconos ---
import { PlusSquareOutlined } from '@ant-design/icons'
import FormNuevaFactura from './FormNuevaFactura';
// ##### Component: Función General ###############################################
const NuevaFactura = () => {
  const [formData, setFormData] = useState();
  // ===== MODAL ======================================================
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalText, setModalText] = useState(false);

  const showModal = async () => { // --- Modal: Mostrar
    setLoading(true);
    setLoading(true);
    setOpen(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);
  };

  const handleOk = async () => { // --- Modal: Al apretar "Aceptar"
    setModalText(true);
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
  }
  // ==================================================================

    // ##### Component: Render ###################################
  return (
    <>
      <Button className='--btn-principal' onClick={showModal}>
          <PlusSquareOutlined /> Nueva factura
      </Button>
      <Modal
          title= "registro de nueva factura"
          open= {open}
          onOk= {handleOk}
          confirmLoading= {confirmLoading}
          cancelButtonProps={{disabled: confirmLoading}}
          onCancel={handleCancel}
          okText= 'Aceptar'
          cancelText= 'Cancelar'
          loading= {loading}
          width={1000}
      >
          { !modalText ? (
            <FormNuevaFactura formData={formData} setFormData={setFormData} />
          ) : (
            <p>Registrando nueva factura en el sistema..........</p>
          ) }
      </Modal>
    </>
  )
  // ###########################################################
}
// ################################################################################
export default NuevaFactura
