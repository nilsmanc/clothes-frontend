import { setCurrentProduct } from "@/context/goods";

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
