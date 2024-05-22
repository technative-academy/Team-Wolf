import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./ProductSlice";
import styles from "./Products.module.css";
import StarRating from "../Reusable/Rating/StarRating";

function Products() {
  const products = useSelector((state) => state.products.items);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const baseUrl = "https://project-2.technative.dev.f90.co.uk/";

  return (
    <div className={styles.wrapper}>
      <div className={` ${styles.card} ${styles.shadow} ${styles.padding}`}>
        <div className={styles.productCards}>
          {products.map((product) => (
            <div className={styles.singleCard} key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <img
                className={styles.productImage}
                src={baseUrl + product.image}
                alt={product.title}
              />
              <p>Price: ${product.price}</p>
              <StarRating />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
