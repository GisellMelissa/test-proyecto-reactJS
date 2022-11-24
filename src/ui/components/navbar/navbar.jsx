import { CartWidget } from "./cart-widget"

export const Navbar = () => {
    return (
        <>
            <ul className="hola">
                <li><a href="/">Home</a></li>
                <li><a href="/ejemplo">Products</a></li>
            </ul>
            <CartWidget />
        </>
    )
}