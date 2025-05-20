// Dependencias principales --
import { Button, message, Modal, Table } from 'antd'
import React from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import { DeleteFilled, EditOutlined, ExclamationCircleOutlined, ZoomInOutlined } from '@ant-design/icons'
// ##### Component: Función General ###############################################
const TablaFacturas = () => {
  // ----- Borrar registro de la Tabla -----------------------------
  const removerFactura = async(cod) => {
    message.success("La factura se ha eliminado correctamente!!!");
    console.log("Eliminado :", cod);
  }
  
  const confirmarBorrado = (cod) => {
    Modal.confirm({
        Title: 'Borrar Factura',
        Icon: <ExclamationCircleOutlined /> ,
        Content: '¿Estas seguro(a) de borrar esta factura ?' ,
        oktext: 'Aceptar ' , 
        okType: 'danger' ,
        onOk() {
            removerFactura(cod);
        },
        onCancel(){
            message.info('Has cancelado la accion, no se ha eliminado la factura!!! ');
        },
    });
  };

  //==========Mapeo Tabla ===========================================================
  const columns = [
      {
        title: "N° Doc",
        dataIndex: "n_doc" ,
        key: "n_doc" ,
        ClassName: "number"
      },
      {
        title: "Proveedor",
        dataIndex: "proveedor" ,
        key: "proveedor" ,
        ClassName: "large-text"
      },
      {
        title: "Fecha Doc",
        dataIndex: "fecha_doc" ,
        key: "fecha_doc" ,
        ClassName: "large-text"
      },
      {
        title: "Valor Total",
        dataIndex: "valor_total" ,
        key: "valor_total" ,
        ClassName: "number"
      },
      {
        title: "Pago",
        dataIndex: "pago" ,
        key: "pago" ,
        ClassName: "large-text"
      },
      {
        title: "Opciones",
        dataIndex: "opciones",
        key: "opciones",
        ClassName: 'large-text',
        align: "right",
        render: () => (
            <div className='--flex-end' size="middle">
                <Button className='--btn-principal'
                        onClick={(e) => confirmarBorrado(e.target.closest('tr').dataset.rowkey)}
                        icon={<ZoomInOutlined />}
                >
                </Button>
                <Button ClassName='--btn-secundario'
                        onClick={(e) => confirmarBorrado(e.target.closest('tr').dataset.rowkey)}
                        icon={<EditOutlined />}
                >
                </Button>
                <Button className='--btn-danger'
                        onClick={(e) => confirmarBorrado(e.target.closest('tr').dataset.rowkey)}
                        icon={<DeleteFilled />}
                >
                </Button>
            </div>
        )
      } 
  ]

  const dataSource = [
    {
        n_doc: 123456,
        proveedor: "San Jorge",
        fecha_doc: "12-03-2025",
        valor_total: 23500,
        pago: "12-03-2025"
    },
    {
        n_doc: 987654,
        proveedor: "Coca-Cola",
        fecha_doc: "14-03-2025",
        valor_total: 32200,
        pago: "15-03-2025"
    }
]
// ##### Component: Render ###################################
return (

    <div>
        <Table columns={columns} dataSource={dataSource} size='small'/>
    </div>
  )

}
// ################################################################################
export default TablaFacturas
