import cl from "./ProductsItem.module.scss";
import Button from "../../Shared/UI/button/Button";

interface ListItem {
  title: string;
  images: string[];
  price: number;
}

const ProductsItem = ({ title, images, price }: ListItem) => {
  return (
    <div className={cl.list_item}>
      <h3>{title}</h3>
      <img className={cl.image} src={images[0]} alt="x" />
      <div className={cl.btn_wrap}>
        <p>{String(price).slice(0, 4)}$</p>
        <Button>BUY</Button>
      </div>
    </div>
  );
};

export default ProductsItem;
