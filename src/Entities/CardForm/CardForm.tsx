import cl from "./CardForm.module.scss";
import Button from "../../Shared/UI/button/Button";
import { useCallback } from "react";

interface CardProperty {
  showModal: boolean;
  price: number | undefined;
  setShowModal: (value: boolean) => void;
}

const CardForm = ({ showModal, price, setShowModal }: CardProperty) => {
  const clickHandler = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ top: showModal ? "20vh" : "-150vh" }}
      className={cl.card}
    >
      <h3 className={cl.title}>Оплатите ваш заказ </h3>
      <div className={cl.content_wrap}>
        <div className={cl.card_wrap}>
          <p>TINKOFF BANK</p>
          <p>2200 4321 5421 2345</p>
          <p>Петухов В.</p>
        </div>
        <div className={cl.content}>
          все данные конфиденциальны, это абсолютно безопасно, так что не
          парься, захотят спиздить спиздят, никто не вечен, нож в печень, оффер
          обеспечен, я чеченец Адам Кадыров.
        </div>
      </div>
      <div className={cl.btn_wrap}>
        <p>Стоимость: {price}$</p>
        <Button>Оплатил</Button>
        <Button clickHandler={clickHandler}>Отменить</Button>
      </div>
    </div>
  );
};

export default CardForm;
