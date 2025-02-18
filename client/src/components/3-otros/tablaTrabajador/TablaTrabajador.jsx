// Dependencias principales ---
import { Button, message, Modal, Table } from 'antd'
import React from 'react'
// Componentes: Generales ---
// Diseño, estilo & iconos ---
import { DeleteFilled, EditOutlined, ExclamationCircleOutlined, ZoomInOutlined } from '@ant-design/icons'
// ##### Component: Función General ###############################################
const TablaTrabajador = () => {
 // ----- Borrar registro de la Tabla -----------------------------  
    const removerTrabajador = async(cod) => {
        message.success('Trabajador eliminado correctamente!!');
        console.log("Eliminado: ", cod)
    }

    const confirmarBorrado = (cod) => {
        Modal.confirm({
            title: 'Borrar Trabajador',
            icon: <ExclamationCircleOutlined />,
            content: '¿Estas seguro(a) de borrar a este trabajador(a)?',
            okText: 'Aceptar ',
            okType: 'danger ',
            cancelText: 'cancelar ',
            onOk() {
                removerTrabajador(cod);
            },
            onCancel() {
                message.info('Has cancelado la accion, no se ha eliminado el trabajador(a). ');
            },
        });
    };

    //==========Mapeo Tabla ===========================================================

    const columns = [
        {   title: "Codigo",
            dataIndex: "cod",
            key: "cod",
            ClassName: "large-text"

        },
        {   title: "Rut",
            dataIndex: "Rut",
            key: "Rut",
            ClassName: "large-text"

        },
        {   title: "Nombre Trabajador",
            dataIndex: "nomTrab",
            key: "nomTrab",
            ClassName: "large-text"

        },
        
        {   title: "Genero",
            dataIndex: "gen",
            key: "gen",
            ClassName: "large-text"

        },
        {   title: "Edad",
            dataIndex: "edad",
            key: "edad",
            ClassName: "large-text"

        },
        {   title: "Estado Civil",
            dataIndex: "estCiv",
            key: "estCiv",
            ClassName: "large-text"

        },
        {   title: "Nacionalidad",
            dataIndex: "nac",
            key: "nac",
            ClassName: "large-text"

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
            key:"1",
            cod: "001",
            rut:"17.256.785-3",
            nomTrab: "Carlos Perez",
            gen: "Masculino",
            edad: "34",
            estCiv:"Soltero",
            nac: "Chileno"

        },
        {
            key:"2",
            cod: "002",
            rut:"20.354.887-1",
            nomTrab: "Jessica Lopez",
            gen: "femenino",
            edad: "26",
            estCiv:"Casada",
            nac: "Chilena"
        },
        {
            key:"3",
            cod: "003",
            rut:"18.334.213-k",
            nomTrab: "Juan Gonzalez",
            gen: "Masculino",
            edad: "30",
            estCiv:"Casado",
            nac: "Chileno"
        },
        {
            key:"4",
            cod: "004",
            rut:"21.888.223-9",
            nomTrab: "Claudia Marteniz",
            gen: "Femenino",
            edad: "40",
            estCiv:"Divorciada",
            nac: "Colombiana"
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
export default TablaTrabajador
