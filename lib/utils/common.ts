import { setCurrentProduct } from "@/context/goods";
import { IProduct } from "@/types/common";

const closeAuthPopup = () => {};
const setSizeTableSizes = () => {};
const addOverflowHiddenToBody = () => {};
const showSizeTable = () => {};

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== "undefined" ? window : { innerWidth: 0 };

  return { windowWidth };
};

export const handleShowSizeTable = (product: IProduct) => {
  setCurrentProduct(product);
  setSizeTableSizes({ sizes: product.sizes, type: product.type });
  addOverflowHiddenToBody();
  showSizeTable();
};

export const showCountMessage = (count: string, lang: string) => {
  if (count == "11" || count == "12" || count == "13" || count == "14") {
    return lang === "ru" ? "товаров" : "items";
  }

  if (count.endsWith("1")) {
    return lang === "ru" ? "товар" : "item";
  }

  if (count.endsWith("2") || count.endsWith("3") || count.endsWith("4")) {
    return lang === "ru" ? "товара" : "items";
  }

  return lang === "ru" ? "товаров" : "items";
};

export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  body.classList.remove("overflow-hidden");
};

export const handleCloseAuthPopup = () => {
  removeOverflowHiddenFromBody();
  closeAuthPopup();
};

export const closeAuthPopupWhenSomeModalOpened = (
  showQuickViewModal: boolean,
  showSizeTable: boolean,
) => {
  if (showQuickViewModal || showSizeTable) {
    closeAuthPopup();
    return;
  }

  handleCloseAuthPopup();
};

export const getWatchedProductFromLS = () => {
  let watchedProducts: IProduct[] = JSON.parse(
    localStorage.getItem("watched") as string,
  );

  if (!watchedProducts || !Array.isArray(watchedProducts)) {
    watchedProducts = [];
  }

  return watchedProducts;
};
