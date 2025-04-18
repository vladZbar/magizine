import { useGetProductByIdQuery } from "../../Shared/services/api/products/products";
import cl from "./Product.module.scss";

const Product = () => {
  const id = Number(localStorage.getItem("id"));
  const { data } = useGetProductByIdQuery(id);

  return (
    <div className={cl.card_wrap}>
      <h1 className={cl.title}>{data?.title}</h1>
    </div>
  );
};

export default Product;
