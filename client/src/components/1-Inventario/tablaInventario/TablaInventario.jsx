// Dependencias principales ---
import { Button, message, Modal, Table } from 'antd'
import React from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import { DeleteFilled, EditOutlined, ExclamationCircleOutlined, ZoomInOutlined } from '@ant-design/icons'
// ##### Component: Función General ###############################################
const TablaInventario = () => {

    // ----- Borrar registro de la Tabla -----------------------------
    const removeProducto = async(cod) => {
        //await dispatch(deleteDocCompra(cod))
        //dispatch(getDocsCompra(selectedMonth))
        message.success("Producto eliminado correctamente.");
        console.log("Eliminado: ", cod);
        
    }

    const confirmarDelete = (cod) => {
        Modal.confirm({
            title: 'Borrar Producto',
            icon: <ExclamationCircleOutlined />,
            content: '¿Estás seguro(a) de eliminar este Producto?',
            okText: 'Aceptar',
            okType: 'danger',
            cancelText: 'Cancelar',
            onOk() {
                removeProducto(cod);
            },
            onCancel() {
                message.info('Has cancelado la acción, no se ha eliminado el Producto.');
            },
        });
    };

    // ===== Mapeo Tabla ===============================================
    const columns = [
        { title: "Código", 
          dataIndex: "cod", 
          key: "cod", 
          className: 'large-text' 
        },
        { title: "Producto", 
          dataIndex: "nombre", 
          key: "nombre", 
          className: 'large-text' 
        },
        { title: "Categoría", 
          dataIndex: "categoria",
          key: "categoria",
          className: 'large-text'
        },
        { title: "Stock",
          dataIndex: "stock",
          key: "stock",
          className: 'large-text'
        },
        { title: "Unidad de Medida",
          dataIndex: "um",
          key: "um",
          className: 'large-text'
        },
        { title: "Valor",
          dataIndex: "valor",
          key: "valor",
          className: 'large-text'
        },
        { title: "Descripción",
          dataIndex: "descripcion",
          key: "descripcion",
          className: 'large-text'
        },
        { title: "Opciones",
          dataIndex: "opciones",
          key: "opciones",
          className: 'large-text',
          align: "right",
          render: () => (
            <div className='--flex-end' size="middle">
                <Button className='--btn-principal'
                        onClick={(e) => confirmarDelete(e.target.closest('tr').dataset.rowKey)}
                        icon={<ZoomInOutlined />}
                >
                </Button>
                <Button className='--btn-secundario'
                        onClick={(e) => confirmarDelete(e.target.closest('tr').dataset.rowKey)}
                        icon={<EditOutlined />}
                >
                </Button>
                <Button className='--btn-danger'
                        onClick={(e) => confirmarDelete(e.target.closest('tr').dataset.rowKey)}
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
            cod: "123435",
            nombre: "Café",
            categoria: "Abarrotes",
            stock: "10",
            um: "unidad",
            valor: "2000",
            descripcion: "Café de grano molido",
        },
        {
          key: "1",
          cod: "1234",
          nombre: "Pan",
          categoria: "Panadería",
          stock: "50",
          um: "unidad",
          valor: "150",
          descripcion: "Pan amasado",
      },
    ];
    
    // =================================================================

    // ##### Component: Render ###################################
    return (
        <div>
            <Table columns={columns} dataSource={dataSource} size='small'/>
        </div>
    )
    // ###########################################################
}
// ################################################################################
export default TablaInventario
