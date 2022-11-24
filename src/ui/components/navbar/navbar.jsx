import { CartWidget } from "./cart-widget"

export const Navbar = () => {
    return (
        <>
    <header>
        <nav className="navigation">
            <ul className="navigation-bar">
                <li className="navigation-bar-item">
                    <a href="./index.html">Inicio</a>
                </li>
                <li className="navigation-bar-item">
                    <a href="./sections/servicios.html">Marcas Zapatos</a>
                </li>
                <li className="navigation-bar-item">
                    <a href="./sections/experiencia.html">Marcas Ropa</a>
                </li>
                <li className="navigation-bar-item">
                    <a href="./sections/portafolio.html">Lo Más vendido</a>
                </li>
                <li className="navigation-bar-item">
                    <a href="./sections/contacto.html">Contacto</a>
                </li>
            </ul>
        </nav>
    </header>
            <CartWidget />
        </>
    )
}