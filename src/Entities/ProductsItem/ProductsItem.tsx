import cl from "./ProductsItem.module.scss";
import Button from "../../Shared/UI/button/Button";
import { formatTitle } from "../../Shared/lib/format";
import { useNavigate } from "react-router-dom";
import { setCountBasket, setId } from "../../Shared/slice/products/products";
import { useAppDispatch } from "../../Shared/hooks/hooks";
import { CiShoppingBasket } from "react-icons/ci";

interface ListItem {
  title: string;
  images: string[];
  price: number;
  desc?: string;
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

  const product: ListItem = {
    title,
    images,
    price,
    id,
  };

  const basketHanlde = () => {
    const basketStr = localStorage.getItem("basket");
    if (basketStr) {
      const arr = JSON.parse(basketStr);
      if (arr.filter((el: ListItem) => el.id === id) < 1) {
        arr.push(product);
        localStorage.setItem("basket", JSON.stringify(arr));
      }
      dispatch(setCountBasket(arr.length));
    }

    if (!localStorage.getItem("basket")) {
      localStorage.setItem("basket", JSON.stringify([product]));
      dispatch(setCountBasket(1));
    }
  };

  return (
    <div className={cl.list_item}>
      <div className={cl.title_wrap}>
        <h3>{formatTitle(title)}</h3>
        <CiShoppingBasket className={cl.icon} onClick={basketHanlde} />
      </div>
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
