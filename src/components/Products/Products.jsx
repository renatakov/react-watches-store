import { useSelector } from "react-redux"
import s from './Products.module.scss'
const Products = () => {
    const state = useSelector(state => state.products)
    return (
        <>
        <section className={s.products}>
            <div className={s.products__info}>

            <h1>products</h1>
            <p>{state.watches.length} Total Products</p>
            </div>
        </section>
        </>
    )
}

export default Products