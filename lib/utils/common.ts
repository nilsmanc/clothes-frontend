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
