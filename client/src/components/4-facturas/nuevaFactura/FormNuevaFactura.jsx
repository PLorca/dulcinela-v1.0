// Dependencias principales ---
import { Button, Divider, Input } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import React from 'react'
// ##### Component: Función General ###############################################
const FormNuevaFactura = ({ formData, setFormData}) => {

  const handleInputChange = (e) => {
      setFormData({...formData, [e.name]: e.value });
  }

  const registrarFactura = () => {
      console.log("factura :", formData);
  }

  // ##### Component: Render ###################################
  return (
    <form>
        <Divider style={{border: '1px solid var(--color-main)'}} />
        <div className='form-row'>
          <div className='form-item'>
              <label htmlFor='n_doc'>Numero Documento : </label>
              <Input placeholder='Ingrese el numero de documento de la factura'
                  type='number'
                  name='n_doc'
                  onChange={handleInputChange}
                  style={{width: '17rem'}}  
              />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-item'>
              <label htmlFor='proveedor'>Proveedor: </label>
              <Input placeholder='Ingrese el proveedor de loa factura'
                  type='text'
                  name='proveedor'
                  onChange={handleInputChange}
                  style={{width: '15rem'}} 
              />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-item'>
              <label htmlFor='valor_total'>Valor Total: </label>
              <Input placeholder='Ingrese el valor total de la factura'
                  type='number'
                  name='valor_total'
                  onChange={handleInputChange}
                  style={{ width: '15rem'}}
              />
          </div>
        </div>
        <div className='form_row'>
          <div className='form-item'>
              <label htmlFor='pago'>Pago :</label>
              <Input placeholder='Ingrese el pago de la factura'
                  type='text'
                  name='pago'
                  onChange={handleInputChange}
                  style={{width: '15rem'}}
              />
          </div>
        </div>
        <Button className='--btn--principal' onClick={registrarFactura}>
            <CheckOutlined />
        </Button>
        <Divider />
    </form>
  );
  // ###########################################################
};
// ################################################################################
export default FormNuevaFactura
