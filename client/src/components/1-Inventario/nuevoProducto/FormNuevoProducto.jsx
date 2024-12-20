// Dependencias principales ---
import { Divider, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
// ##### Component: Función General ###############################################
const FormNuevoProducto = ({ formData, setFormData }) => {

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    // ===== CATEGORIA ====================================
    const categoriaHandleChange = (value) => {
        setFormData({ ...formData, categoria: value });
    }
    // ===== UNIDAD DE MEDIDA ============================
    const umHandleChange = (value) => {
        setFormData({ ...formData, um: value });
    }
    
    // ##### Component: Render ###################################
    return (
        <form>
            <Divider style={{border: '1px solid var(--color-main)'}}/>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='nombre'>Nombre del Producto:</label>
                    <Input placeholder='Ingrese el nombre del Producto'
                        type='text'
                        name='nombre'
                        onChange={handleInputChange}
                        style={{ width: '25rem' }}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='categoria'>Categoria:</label>
                    <Select options={[
                                { value: 'abarrotes', label: 'Abarrotes' },
                                { value: 'bebidas', label: 'Bebidas' }
                            ]}
                            placeholder='Seleccione una categoría'
                            name='categoria'
                            onChange={categoriaHandleChange}
                            style={{ width: '15rem'}}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='stock'>Stock del Producto:</label>
                    <Input placeholder='Ingrese el stock del Producto'
                        type='number'
                        name='stock'
                        onChange={handleInputChange}
                        style={{ width: '15rem' }}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='valor'>Valor del Producto:</label>
                    <Input placeholder='Ingrese el valor del Producto'
                        type='number'
                        name='valor'
                        onChange={handleInputChange}
                        style={{ width: '15rem' }}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='um'>Unidad de Medida:</label>
                    <Select options={[
                                { value: 'caja', label: 'Caja' },
                                { value: 'litro', label: 'Litro' },
                                { value: 'unidad', label: 'Unidad' },
                                { value: 'kilo', label: 'Kilo' },
                                { value: 'gramos', label: 'Gramos' }
                            ]}
                            placeholder='Seleccione una Unidad de Medida'
                            name='um'
                            onChange={umHandleChange}
                            style={{ width: '15rem'}}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor="descripcion">Descripción:</label>
                    <TextArea id="descripcion"
                              rows={4}
                              showCount
                              allowClear
                              maxLength={525}
                              name='descripcion'
                              onChange={handleInputChange}
                              style={{ resize: 'none', marginTop: "0.2rem", width: '30rem' }}
                    />
                </div>
            </div>
            <Divider orientation='left'>
                <h5>Datos Adicionales</h5>
            </Divider>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='valor_compra'>Valor de Compra:</label>
                    <Input placeholder='Ingrese el valor de compra del Producto'
                        type='number'
                        name='valor_compra'
                        onChange={handleInputChange}
                        style={{ width: '15rem' }}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='marca'>Marca del Producto:</label>
                    <Input placeholder='Ingrese la marca del Producto'
                        type='text'
                        name='marca'
                        onChange={handleInputChange}
                        style={{ width: '15rem' }}
                    />
                </div>
            </div>
            <Divider style={{border: '1px solid var(--color-main)'}}/>
        </form>
    );
    // ###########################################################
};
// ################################################################################
export default FormNuevoProducto;