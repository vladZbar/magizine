import cl from "./ProductsItem.module.scss";
import Button from "../../Shared/UI/button/Button";
import { formatTitle } from "../../Shared/lib/format";
import { useNavigate } from "react-router-dom";
import { setId } from "../../Shared/slice/products/products";
import { useAppDispatch } from "../../Shared/hooks/hooks";

interface ListItem {
  title: string;
  images: string[];
  price: number;
  desc: string;
  id: number;
}

const ProductsItem = ({ title, images, price, desc, id }: ListItem) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(setId(id));
    navigate(`/products/${id}`);
    localStorage.setItem("id", String(id));
  };

  return (
    <div className={cl.list_item}>
      <h3>{formatTitle(title)}</h3>
      <div>
        <div className={cl.desc}>
          <span>{desc}</span>
        </div>
        <img className={cl.image} src={images[0]} alt="x" />
      </div>
      <div className={cl.btn_wrap}>
        <p>{String(price).slice(0, 4)}$</p>
        <Button clickHandler={clickHandler}>BUY</Button>
      </div>
    </div>
  );
};

export default ProductsItem;
