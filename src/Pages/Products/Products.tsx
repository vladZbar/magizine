import ProductsList from "../../Entities/ProductsList/ProductsList";
import SearchItems from "../../Features/search-items/SearchItems";

const Products = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <SearchItems />
      <ProductsList />
    </div>
  );
};

export default Products;
