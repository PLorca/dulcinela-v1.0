// Dependencias principales ---
import { Button, Divider, Input, Select } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import React from 'react'
// ##### Component: Función General ###############################################

const FormNuevoTrabajador = ({ formData, setFromData}) =>{

    const handleInputChange = (e) => {
        setFromData({...formData, [e.target.name]: e.target.value });
    }

    const trabajadorHandleChange = (value) => {
        setFromData({...formData, id_trabajador: value});
    }

    const registrarTrabajador = () => {
       console.log("Trabajador: ", formData); 
    }

      // ##### Component: Render ###################################
    return (
        <form>
            <Divider style={{border: '1px solid var(--color-main)'}}/>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='rut'>rut: </label>
                    <Input placeholder='Ingrese el rut del trabajor(a)' 
                        type='text'
                        name='rut'
                        onChange={handleInputChange}
                        style={{ width: '15rem '}}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='nombre'>Nombre: </label>
                    <Input placeholder='Ingrese el nombre del trabajador(a)'
                        type='text'
                        name='nombre'
                        onChange={handleInputChange}
                        style={{ width: '15rem' }} 
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='genero'>Genero: </label>
                    <Select options={[
                            { value: '001', label: 'Masculino'},
                            { value: '002', label: 'Femenino'}
                        ]}
                        placeholder='Seleccione un genero'
                        name='genero'
                        onChange={trabajadorHandleChange}
                        style={{ width: '20rem' }} 
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='edad'>Edad: </label>
                    <Input  placeholder='Ingrese la edad del trabajador(a)'               
                        type='number'
                        name='edad'
                        onChange={handleInputChange}
                        style={{ width: '15rem' }}
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='estCivil'>Estado Civil</label>
                    <Select options={[
                            {value: '001', label: 'Soltero(a)'},
                            {value: '002', label: 'casado(a)'},
                            {value: '003', label: 'Divorciado(a)'}
                    ]}
                    placeholder= 'Seleccione el estado civil'
                    name= 'estCivil'
                    onChange={trabajadorHandleChange}
                    style={{ width: '20rem '}} 
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-item'>
                    <label htmlFor='nacd'>nacionalidad: </label>
                    <Input placeholder='Ingrese la nacionalidad del trabajador(a)' 
                        type='text'
                        name='nacd'
                        onChange={handleInputChange}
                        style={{ width: '15rem '}}
                    />
                </div>
            </div>
            <Button className='--btn-principal' onClick={registrarTrabajador}>
                <CheckOutlined /> Registrar
            </Button>
            <Divider />
        </form>
    );
  // ###########################################################
};
// ################################################################################
export default FormNuevoTrabajador
