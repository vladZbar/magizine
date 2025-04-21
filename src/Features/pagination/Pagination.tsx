import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Shared/hooks/hooks";
import { setPage } from "../../Shared/slice/products/products";
import cl from "./Pagination.module.scss";

interface IPageItem {
  pageNum: number;
}

const Pagination = () => {
  const [pageFocus, setPageFocus] = useState(1);
  const dispatch = useAppDispatch();
  const dataLength = Math.floor(
    useAppSelector((state) => state.productsState.products).length / 6
  );

  const pageItems: IPageItem[] = [];
  for (let i = 0; i <= dataLength; i++) {
    const page: IPageItem = { pageNum: i + 1 };
    pageItems.push(page);
  }

  const pageHandle = (e: React.MouseEvent<HTMLElement>) => {
    const n: number = Number(e.currentTarget.textContent) * 6;
    dispatch(setPage(n - 6));
    setPageFocus(n / 6);
  };

  return (
    <div className={cl.pagination_wrap}>
      <ul className={cl.pagination_list}>
        {pageItems.map((el) => (
          <li
            onClick={pageHandle}
            className={
              el.pageNum !== pageFocus
                ? cl.pagination_item
                : `${cl.pagination_item} ${cl.pagination_item_checked}`
            }
            key={el.pageNum}
          >
            {el.pageNum}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
