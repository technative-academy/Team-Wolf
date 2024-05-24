import ButtonPurple from "../Reusable/ButtonPurple/ButtonPurple";
import SearchInput from "../Reusable/SearchInput/SearchInput";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./ProductSlice";
import styles from "./Products.module.css";
import StarRating from "../Reusable/Rating/StarRating";

function Products() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const baseUrl = "https://project-2.technative.dev.f90.co.uk/";

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    setSearchTerm(input);
  };

  console.log(input);

  return (
    <div className={styles.wrapper}>
      <div className={` ${styles.card} ${styles.shadow} ${styles.padding}`}>
        <div className={styles.searchContainer}>
          <SearchInput
            className={styles.searchInput}
            input={input}
            setInput={setInput}
          />
          <div className={styles.buttonContainer}>
            <ButtonPurple
              text="Search"
              onClick={handleSearchClick}
            />
          </div>
        </div>
        {filteredProducts.length === 1 ? (
          <p
            className={styles.productsFound}
          >{`${filteredProducts.length} Products shown`}</p>
        ) : (
          <p
            className={styles.productsFound}
          >{`${filteredProducts.length} Products shown`}</p>
        )}

        <div className={styles.productCards}>
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((product) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
