import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "../../components/Modal";
import styles from "../../styles/Product.module.scss";
import "animate.css";
import Image from "next/image";
import Footer from "../../components/Footer";

const ProductId = ({ product }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.productWrapper}>
        <div
          className={`${styles.backButton} animate__animated animate__fadeIn`}
        >
          <button onClick={() => router.push("/shop")}>Go Back</button>
        </div>
        <div className={styles.productGrid}>
          <div
            className={`${styles.productImage} animate__animated animate__fadeIn`}
            onClick={() => setIsModalOpen(true)}
          >
            <div className={styles.zoomIcon}></div>
            <Image
              src={product.cloudinaryLink}
              alt={product.title}
              width="400px"
              height="532px"
              placeholder="blur"
              blurDataURL={product.cloudinaryLink}
            />
          </div>
          <div className={styles.productContent}>
            <div
              className={`${styles.productHeadline} animate__animated animate__fadeIn`}
            >
              <h2>{product.title}</h2>
              <h4>
                Pages: <span>{product.pagesQuantity}</span>
              </h4>
              <h4>
                Price: <span>${product.price}</span>
              </h4>
            </div>
            <div
              className={`${styles.youtubeLink} animate__animated animate__fadeIn`}
            >
              <iframe
                src={product.youtubeLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div
            className={`${styles.productBuyWrapper} animate__animated animate__fadeIn`}
          >
            <div className={styles.productBuyHeadline}>
              <span>Title:</span>
              <span>{product.title}</span>
            </div>
            <div className={styles.productBuyPrice}>
              <span>Price:</span>
              <span>${product.price}</span>
            </div>
            <div className={styles.productBuyButton}>
              <button onClick={() => router.push(product.payLink)}>Buy</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div className={styles.modalImageWrapper}>
          <Image
            src={product.cloudinaryLink}
            alt={product.title}
            width="600px"
            height="800px"
            placeholder="blur"
            blurDataURL={product.cloudinaryLink}
          />
        </div>
      </Modal>
    </>
  );
};

export default ProductId;

export async function getStaticPaths() {
  const response = await fetch(
    "https://my-json-server.typicode.com/AndrewReshetar/georgeshop/products"
  );
  // const response = await fetch("http://localhost:5000/products");
  const products = await response.json();
  const paths = products.map((p) => {
    return {
      params: {
        productTitle: `${p.titleQuery}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://my-json-server.typicode.com/AndrewReshetar/georgeshop/products/?titleQuery=${params.productTitle}`
  );
  // const response = await fetch(
  //   `http://localhost:5000/products?titleQuery=${params.productTitle}`
  // );
  const product = await response.json();
  return {
    props: {
      product: product[0],
    },
  };
}
