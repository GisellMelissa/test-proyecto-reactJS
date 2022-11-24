import { ProductList } from "../components/products/product-list"

export const Home = () => {
    return (
        <>
            <div>Estoy en el home</div>
            <ProductList greeting={'hola mundo'} />
        </>
    )
}