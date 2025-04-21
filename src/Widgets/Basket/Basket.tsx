import cl from "./Basket.module.scss";
import Button from "../../Shared/UI/button/Button";
import { useAppDispatch, useAppSelector } from "../../Shared/hooks/hooks";
import { setShowBasket } from "../../Shared/slice/products/products";

const Basket = () => {
  const showBasket = useAppSelector((state) => state.productsState.showBasket);
  const dispatch = useAppDispatch();
  const modalElement = document.getElementById("modal");

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      if (modalElement && !modalElement.contains(target)) {
        dispatch(setShowBasket(false));
      }
    }
  });

  const handleClick = (e?: React.MouseEvent<HTMLElement>) => {
    e?.stopPropagation();
    dispatch(setShowBasket(false));
  };

  return (
    <>
      <div
        style={{ display: !showBasket ? "none" : "block" }}
        className={cl.blur}
      ></div>
      <aside
        id="modal"
        style={{ right: !showBasket ? "-350px" : 0 }}
        className={cl.basket}
      >
        <div className={cl.icon} onClick={handleClick}>
          X
        </div>
        <h3 className={cl.title}>BASKET</h3>
        <div className={cl.products_wrap}></div>
        <Button>Pay</Button>
      </aside>
    </>
  );
};

export default Basket;
