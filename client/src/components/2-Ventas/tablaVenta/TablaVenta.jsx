// Dependencias principales ---
import { Button, message, Modal, Table } from 'antd'
import React from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import { DeleteFilled, EditOutlined, ExclamationCircleOutlined, ZoomInOutlined } from '@ant-design/icons'
// ##### Component: Función General ###############################################
const TablaVenta = () => {
    // ----- Borrar registro de la Tabla -----------------------------
    const removerVenta = async(cod) => {
        //await dispatch(deleteDocCompra(cod))
        //dispatch(getDocsCompra(selectedMonth))
        message.success("Venta eliminada correctamente.");
        console.log("Eliminado: ", cod);
    }

    const confirmarBorrado = (cod) => {
        Modal.confirm({
            title:'Borrar Venta',
            icon: <ExclamationCircleOutlined />,
            content: '¿Estas seguro(a) de borrar esta venta?',
            okText: 'Aceptar ',
            okType: 'danger ',
            cancelText: 'Cancelar ',
            onOk() {
                removerVenta(cod);
            },
            onCancel() {
                message.info('Has cancelado la accion, no se ha elimando la ventas. ');
            },
        });
    };

    //==========Mapeo Tabla ===========================================================
    const columns = [
        { title: "Codigo",
          dataIndex: "cod",
          key: "cod",
          ClassName: 'large-text'  
        },
        { title: "valor venta",
          dataIndex: "valor", /*nombre en la base de datos*/  
          key: "valor",
          ClassName: 'large-text'  
        },
        { title: "Hora venta",
          dataIndex: "hv",
          key: "hv",
          className: 'large-text'  
        },
        { title: "Detalle",
            dataIndex: "detalle",
            key: "detalle",
            className: 'large-text'
        },
        {   title: "Opciones",
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
            key: "1",
            cod: "001",
            hv: "13:12",
            valor: 3500,
            detalle: "10 panes, 1 Coca-cola 2lts",
        },
        {
            key: "2",
            cod: "002",
            hv: "15:41",
            valor: 6500,
            detalle: "20 panes, 1 cafe",
        },
        {
            key: "3",
            cod: "003",
            hv: "17:01",
            valor: 1800,
            detalle: "9 panes"
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
export default TablaVenta