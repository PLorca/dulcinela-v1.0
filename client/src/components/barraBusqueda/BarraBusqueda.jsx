import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const BarraBusqueda = ({ onSearch }) => {
    return (
        <Input.Search placeholder="Buscar..."
                      enterButton={<SearchOutlined />}
                      size="large"
                      onSearch={onSearch}
                      style={{ maxWidth: 400 }}
        />
    );
}

export default BarraBusqueda
