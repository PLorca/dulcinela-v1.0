import React from "react"
import "./Navbar.css"
import {Button} from 'antd';
import BarraBusqueda from "../barraBusqueda/BarraBusqueda";

const Navbar = () => {

    const handleSearch = (value) => {
        console.log("Texto de búsqueda:", value);
        // Aquí puedes agregar la lógica para buscar el texto en tu lista o base de datos
    };

    return (
        <div className="navbar">
            <div className="logo">
            </div>
            <Button>
                Todos los Productos
            </Button>
            <BarraBusqueda onSearch={handleSearch} />
        </div>
    )
}

export default Navbar