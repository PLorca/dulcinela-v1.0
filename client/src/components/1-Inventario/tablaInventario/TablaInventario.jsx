// Dependencias principales ---
import { Button, message, Modal, Table } from 'antd'
import React from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import { DeleteFilled, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
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
        { title: "Codigo", 
          dataIndex: "cod", 
          key: "cod", 
          className: 'large-text' 
        },
        { title: "Nombre P.", 
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
        { title: "Valor",
          dataIndex: "valor",
          key: "valor",
          className: 'large-text'
        },
        { title: "Opciones",
          dataIndex: "opciones",
          key: "opciones",
          className: 'large-text',
          align: "right",
          render: () => (
            <div className='--flex-end' size="middle">
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
            valor: "2000"
        },
        {
            key: "2",
            cod: "123436",
            nombre: "Té",
            categoria: "Bebidas",
            stock: "5",
            valor: "1590"
        },
        {
            key: "3",
            cod: "123437",
            nombre: "Azúcar",
            categoria: "Abarrotes",
            stock: "15",
            valor: "2500"
        },
        {
            key: "4",
            cod: "126435",
            nombre: "Sal",
            categoria: "Abarrotes",
            stock: "10",
            valor: "990"
        },
        {
            key: "5",
            cod: "123836",
            nombre: "Palo Rico",
            categoria: "Helados",
            stock: "5",
            valor: "690"
        },
        {
            key: "6",
            cod: "223437",
            nombre: "Arroz",
            categoria: "Abarrotes",
            stock: "15",
            valor: "1200"
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
