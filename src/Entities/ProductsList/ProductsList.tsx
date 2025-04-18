import cl from "./ProductsList.module.scss";
import { useGetProductsQuery } from "../../Shared/services/api/products/products";
import ProductsItem from "../ProductsItem/ProductsItem";
import { useEffect } from "react";
import { setProducts } from "../../Shared/slice/products/products";
import { useAppDispatch, useAppSelector } from "../../Shared/hooks/hooks";
const ProductsList: React.FC = () => {
  const { data } = useGetProductsQuery();
  const page = useAppSelector((state) => state.productsState.page);
  const products = useAppSelector((state) => state.productsState.products);
  const limit = useAppSelector((state) => state.productsState.limit);

  console.log(products);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [dispatch, data]);

  const elements = products.slice(page, limit)?.map((el) => (
    <li key={el.id}>
      <ProductsItem
        id={el.id}
        title={el.title}
        images={el.images}
        price={el.price}
        desc={el.description}
      />
    </li>
  ));

  return (
    <div className={cl.list_wrap}>
      <ul className={cl.list}>{elements}</ul>
      {!products.length && <div>По вашему запросу ничего не найдено</div>}
    </div>
  );
};

export default ProductsList;
