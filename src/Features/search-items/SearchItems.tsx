import cl from "./SearchItems.module.scss";

import Input from "../../Shared/UI/input/Input";
import Button from "../../Shared/UI/button/Button";
import { FC, useState } from "react";
import { setPage, setProducts } from "../../Shared/slice/products/products";
import { useAppDispatch } from "../../Shared/hooks/hooks";
import { useGetProductsQuery } from "../../Shared/services/api/products/products";

const SearchItems: FC = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { data } = useGetProductsQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    if (data) {
      dispatch(
        setProducts(
          data.filter((el) =>
            el.title.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
      setPage(0);
      setSearch("");
    }
  };

  return (
    <div className={cl.seatch_container}>
      <h1 className={cl.title}>SEARCH PRODUCTS</h1>
      <div className={cl.btn_wrap}>
        <Input
          name="search"
          type="text"
          value={search}
          handleChange={handleChange}
        />
        <Button clickHandler={handleClick}>Search</Button>
      </div>
    </div>
  );
};

export default SearchItems;
