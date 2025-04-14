import cl from "./SearchItems.module.scss";

import Input from "../../Shared/UI/input/Input";
import Button from "../../Shared/UI/button/Button";
import { FC, useState } from "react";

const SearchItems: FC = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    console.log('xxx');
    
  }

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
