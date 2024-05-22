// import styles from "./Products.module.css";
// import fetchProducts from "./ProductSlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// function Products() {
//   const productImage = useSelector((state) => state.product.imageURL);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (
//     <div className={styles.wrapper}>
//       Products
//       {productImage && <img src={productImage} alt="product" />}
//     </div>
//   );
// }

// export default Products;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./ProductSlice";

function Products() {
  const products = useSelector((state) => state.products.items);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const baseUrl = "https://project-2.technative.dev.f90.co.uk/";

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={baseUrl + product.image} alt={product.title} />
          <p>Price: ${product.price}</p>
          <p>Stars: {product.stars}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
