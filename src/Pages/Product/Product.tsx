import { useLazyGetProductByIdQuery } from "../../Shared/services/api/products/products";
import cl from "./Product.module.scss";
import Button from "../../Shared/UI/button/Button";
import React, { useCallback, useEffect, useState } from "react";
import CardForm from "../../Entities/CardForm/CardForm";

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const id = Number(localStorage.getItem("id"));
  const [getProduct, { data }] = useLazyGetProductByIdQuery();
  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);

  const clickHandler = useCallback(
    (e?: React.MouseEvent<HTMLElement>) => {
      console.log(e);
      e?.stopPropagation()
      setShowModal(true);
    },
    [setShowModal]
  );

  document.addEventListener("click", () => {
    setShowModal(false);
  });

  const images = data?.images.map((el, i) => (
    <div className={cl.image_wrap} key={i} tabIndex={i + 1}>
      <img className={cl.img} src={el} />
      <div className={cl.sale} key="sale">
        <span>{data?.price}$</span>
        <Button clickHandler={clickHandler}>Add to cart</Button>
      </div>
    </div>
  ));

  return (
    <>
      <CardForm showModal={showModal} price={data?.price} setShowModal={setShowModal} />
      <div className={cl.card_wrap}>
        <h1 className={cl.title}>{data?.title}</h1>
        <div className={cl.image_wrap}>{images}</div>
        <div className={cl.description}>{data?.description}</div>
      </div>
    </>
  );
};

export default Product;
