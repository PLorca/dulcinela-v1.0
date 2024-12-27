// Dependencias principales ---
import { Button, Divider, Input, Select } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import React from 'react';
// ##### Component: Función General ###############################################

const FormNuevaVenta = ({ formData, setFormData}) => {

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const productoHandleChange = (value) => {
        setFormData({...formData, id_producto: value});
    }

    const registrarProducto = () => {
        console.log("Producto: ", formData);
        
    }

    // ##### Component: Render ###################################
    return (
        <form>
            <Divider style={{border: '1px solid var(--color-main)'}}/>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='id_producto'>Producto: </label>
                    <Select options={[
                                { value: '001', label: 'Pan Amasado'},
                                { value: '002', label: 'Empanadas'},
                                {value: '003', label: 'Pie de Limon'}
                            ]}
                            placeholder='seleccione un producto'
                            name='id_producto'
                            onChange={productoHandleChange}
                            style={{ width: '20rem' }}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='cantidad'>Cantidad: </label>
                    <Input placeholder='Ingrese la cantidad de productos' 
                        type='number'
                        name='cantidad'
                        onChange={handleInputChange}
                        style={{ width: '15rem' }}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='valor'>Valor: </label>
                    <Input placeholder='Ingrese el valor del productos' 
                        type='number'
                        name='valor'
                        onChange={handleInputChange}
                        style={{ width: '15rem' }}
                    />
                </div>
            </div>
            <Button className='--btn-principal' onClick={registrarProducto}>
                <CheckOutlined />Registrar
            </Button>
            <Divider />
        </form>  
    );
    // ###########################################################
};
// ################################################################################
export default FormNuevaVenta
