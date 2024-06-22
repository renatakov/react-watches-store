import s from "./ProductsItem.module.scss"

const ProductsItem = (props) => {
    return (
        <div className={s.productsItem}>
            <div className={s.imgContainer}>

            <img className="d-block w-100" src={props.img} alt="" />
            </div>
            <p>{props.model}</p>
            <span>${props.price}</span>
        </div>
    )
}

export default ProductsItem;