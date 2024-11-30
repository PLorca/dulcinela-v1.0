import { Divider, Input, Select } from 'antd'
import React from 'react'

const FormAdminLogin = ({ formData, setFormData }) => {

    const adminHandleChange = (e) => {
        setFormData({ ...formData, id_usuario: e })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Actualizar el fromData in el Modal
    };

    return (
        <form>
            <Divider />
            <div>
                <label style={{ width: "5.5rem" }}>Nombre: </label>
                <Select options={[ 
                                    { value: "1", label: "Marianlea Lorca" },
                                    { value: "2", label: "Pablo Poblete" },
                                    { value: "3", label: "Felipe Poblete" } 
                                ]}
                        showSearch
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase()
                                                  .localeCompare((optionB?.label ?? '')
                                                  .toLowerCase())
                        }
                        name='id_usuario'
                        placeholder="Seleccione Administrador"
                        onChange={adminHandleChange}
                        style={{ width: '20rem' }}     
                />
            </div>
            <div>
                <label style={{ width: "5.5rem" }}>Contraseña: </label>
                <Input.Password placeholder="Insertar Contraseña" 
                                name='password'
                                onChange={handleInputChange}
                                style={{ width: '20rem' }}
                />
            </div>
            <Divider />
        </form>
    )
}

export default FormAdminLogin
