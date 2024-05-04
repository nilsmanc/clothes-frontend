import { IProduct } from "./common";

export interface ILoadOneProductFx {
  productId: string;
  category: string;
  setSpinner?: (arg0: boolean) => void;
  withShowingSizeTable?: boolean;
}

export interface ILoadProductsByFilterFx {
  limit: number;
  offset: number;
  category: string;
  additionalParam?: string;
  isCatalog?: boolean;
}

export interface ILoadWatchedProductsFx {
  payload: { _id: string; category: string }[];
}

export interface IProducts {
  count: number;
  items: IProduct[];
}
