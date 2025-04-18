import ProductsList from "../../Entities/ProductsList/ProductsList";
import SearchItems from "../../Features/search-items/SearchItems";
import Pagination from "../../Features/pagination/Pagination";

const Products = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <SearchItems />
      <ProductsList />
      <Pagination />
    </div>
  );
};

export default Products;
