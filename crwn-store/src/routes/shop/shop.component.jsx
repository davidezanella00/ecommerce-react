import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <ProductCard
                            productProp={product}
                        />
                    </div>
                );
            })}
        </div >
    );
}

export default Shop;