import cl from "./ProductsList.module.scss";
import { useGetProductsQuery } from "../../Shared/services/api/products/products";
import ProductsItem from "../ProductsItem/ProductsItem";
const ProductsList: React.FC = () => {
  const { data } = useGetProductsQuery();
  const elements = data?.map((el) => (
    <li key={el.id}>
      <ProductsItem title={el.title} images={el.images} price={el.price} />
    </li>
  ));
  return (
    <div className={cl.list_wrap}>
      <ul className={cl.list}>{elements}</ul>
    </div>
  );
};

export default ProductsList;
