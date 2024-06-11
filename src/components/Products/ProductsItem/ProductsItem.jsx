import s from "./ProductsItem.module.scss"

const ProductsItem = (props) => {
    return (
        <div className={s.productsItem}>
            <div className={s.imgContainer}>

            <img src="https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-1.png" alt="" />
            </div>
            <p>{props.model}</p>
            <span>${props.price}</span>
        </div>
    )
}

export default ProductsItem;