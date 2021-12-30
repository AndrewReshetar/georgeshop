import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Shop.module.scss";
import styled from "@emotion/styled";
import Select from "react-dropdown-select";
import "animate.css";
import Footer from "../../components/Footer";

const sortOptions = [
  { label: "Alphabetically, A-Z", value: "az" },
  { label: "Alphabetically, Z-A", value: "za" },
  { label: "Price, low to high", value: "pl" },
  { label: "Price, high to low", value: "ph" },
  { label: "Date, old to new", value: "do" },
  { label: "Date, new to old", value: "dn" },
];

const Shop = ({ productsData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState(productsData);
  const [chosenSortItem, setChosenSortItem] = useState(sortOptions[0]);

  useEffect(() => {
    if (searchValue) {
      const foundProducts = productsData.filter((p) =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProducts(foundProducts);
    } else {
      setProducts(productsData);
    }
  }, [searchValue, productsData]);

  const renderProductsBySort = (sortBy) => {
    let sortedProducts = [];
    switch (sortBy.value) {
      case "az":
        sortedProducts = products.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        () => setProducts(sortedProducts);
        break;
      case "za":
        sortedProducts = products.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        () => setProducts(sortedProducts);
        break;
      case "pl":
        sortedProducts = products.sort((a, b) => a.price - b.price);
        () => setProducts(sortedProducts);
        break;
      case "ph":
        sortedProducts = products.sort((a, b) => b.price - a.price);
        () => setProducts(sortedProducts);
        break;
      case "do":
        sortedProducts = products.sort(
          (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
        );
        () => setProducts(sortedProducts);
        break;
      case "dn":
        sortedProducts = products.sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
        () => setProducts(sortedProducts);
        break;
      default:
        return products;
    }
  };

  return (
    <div className={styles.shopWrapper}>
      <div className={`${styles.shopFilter}`}>
        <div className={styles.shopSortBy}>
          <span>Sort by:</span>
          <StyledSelect
            options={sortOptions}
            values={[sortOptions[0]]}
            color="#333"
            dropdownGap={0}
            onChange={(sortValue) => setChosenSortItem(sortValue[0])}
          />
        </div>
        <div className={styles.shopFindProduct}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
          />
          <span className={styles.productsCount}>
            Products found: {products.length}
          </span>
        </div>
      </div>
      <div
        className={`${styles.productsGrid} animate__animated animate__fadeIn`}
      >
        {renderProductsBySort(chosenSortItem)}
        {products.length ? (
          products.map((p) => {
            return (
              <Link href={`shop/${p.titleQuery}`} passHref key={p.id}>
                <div className={styles.productWrapper}>
                  <div className={styles.productImg}>
                    <Image
                      src={p.cloudinaryLink}
                      alt={p.title}
                      width="200px"
                      height="260px"
                      placeholder="blur"
                      blurDataURL={p.cloudinaryLink}
                    />
                  </div>
                  <div className={styles.productContent}>
                    <span className={styles.productTitle}>{p.title}</span>
                    <span className={styles.productPrice}>${p.price}</span>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <h2 className={styles.noItemsFound}>No items found</h2>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;

export async function getStaticProps() {
  // const response = await fetch(
  //   "https://my-json-server.typicode.com/AndrewReshetar/georgeshop/products"
  // );
  const response = await fetch("http://localhost:5000/products");
  const products = await response.json();
  const sortedProducts = products.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  return {
    props: {
      productsData: sortedProducts,
    },
  };
}

const StyledSelect = styled(Select)`
  background: #333;
  border: #333 !important;
  color: #fff;
  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: #fff;
  }
  .react-dropdown-select-option {
    border: 1px solid #fff;
  }
  .react-dropdown-select-item {
    color: #333;
  }
  .react-dropdown-select-input {
    color: #fff;
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    right: 0;
    border: none;
    width: 200px;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    max-height: 300px;
    overflow: auto;
    z-index: 10;
    background: #333;
    box-shadow: none;
    color: #fff !important;
  }
  .react-dropdown-select-item {
    color: #f2f2f2;
    border-bottom: 1px solid #333;
    :hover {
      color: #ffffff80;
    }
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    border-bottom: 1px solid #333;
    color: #fff;
    font-weight: bold;
  }
  .react-dropdown-select-item.react-dropdown-select-item-disabled {
    background: #777;
    color: #ccc;
  }
`;
