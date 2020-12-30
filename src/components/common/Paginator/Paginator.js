import React, { useState } from "react";
import style from "../Paginator/Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageCurrentPageChange,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.paginator}>
      {portionNumber > 1 && (
        <button
          className={style.button}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          <img
            className={style.button__img}
            src="https://di.phncdn.com/www-static/images/leftArrow.png"
            alt="arrow_left"
          />
          Назад
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p ? style.active : style.notActive}
              onClick={(e) => {
                onPageCurrentPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={style.button}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Вперед
          <img
            className={style.button__img}
            src="https://di.phncdn.com/www-static/images/rightArrow.png"
            alt="arrow_left"
          />
        </button>
      )}
    </div>
  );
};

export default Paginator;
