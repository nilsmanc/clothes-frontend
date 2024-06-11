export interface IHeadingWithCountProps {
  count: number;
  title: string;
  spinner?: boolean;
}

export interface ISkeletonProps {
  styles: {
    readonly [key: string]: string;
  };
  count?: number;
}

export interface IProductAvailableProps {
  vendorCode: string;
  inStock: number;
}

export interface IProductItemActionBtnProps {
  text: string;
  iconClass: string;
  spinner?: boolean;
  callback?: VoidFunction;
  withTooltip?: boolean;
  marginBottom?: number;
}

export interface IAddToCartIconProps {
  isProductInCart: boolean;
  addedClassName: string;
  className: string;
  addToCartSpinner: boolean;
  callback: VoidFunction;
}
