/* eslint-disable indent */
import { JWTError } from "@/constants/jwt";
import { refreshTokenFx } from "@/context/auth";
import {
  addProductToCartFx,
  addProductsFromLSToCartFx,
  deleteAllFromCartFx,
  deleteCartItemFx,
  getCartItemsFx,
} from "@/context/cart";
import {
  addProductToComparisonFx,
  getComparisonItemsFx,
  addProductsFromLSToComparisonFx,
  deleteComparisonItemFx,
} from "@/context/comparison";
import { makePaymentFx } from "@/context/order";
import { loginCheckFx } from "@/context/user";
import {
  IAddProductToCartFx,
  IAddProductsFromLSToCartFx,
  IDeleteCartItemsFx,
} from "@/types/cart";
import {
  IAddProductToComparisonFx,
  IAddProductsFromLSToComparisonFx,
  IDeleteComparisonItemsFx,
} from "@/types/comparison";
import {
  IAddProductsFromLSToFavoriteFx,
  IDeleteFavoriteItemsFx,
} from "@/types/favorites";
import { IMakePaymentFx } from "@/types/order";

export const handleJWTError = async (
  errorName: string,
  repeatRequestAfterRefreshData?: {
    repeatRequestMethodName: string;
    payload?: unknown;
  },
) => {
  if (errorName === JWTError.EXPIRED_JWT_TOKEN) {
    const auth = JSON.parse(localStorage.getItem("auth") as string);
    const newTokens = await refreshTokenFx({ jwt: auth.refreshToken });

    if (repeatRequestAfterRefreshData) {
      const { repeatRequestMethodName, payload } =
        repeatRequestAfterRefreshData;

      switch (repeatRequestMethodName) {
        case "getCartItemsFx":
          return getCartItemsFx({
            jwt: newTokens.accessToken,
          });
        case "addProductToComparisonFx":
          return addProductToComparisonFx({
            ...(payload as IAddProductToComparisonFx),
            jwt: newTokens.accessToken,
          });
        case "getComparisonItemsFx":
          return getComparisonItemsFx({
            jwt: newTokens.accessToken,
          });
        case "addProductsFromLSToComparisonFx":
          return addProductsFromLSToComparisonFx({
            ...(payload as IAddProductsFromLSToComparisonFx),
            jwt: newTokens.accessToken,
          });
        case "deleteComparisonItemFx":
          return deleteComparisonItemFx({
            ...(payload as IDeleteComparisonItemsFx),
            jwt: newTokens.accessToken,
          });
        case "addProductToCartFx":
          return addProductToCartFx({
            ...(payload as IAddProductToCartFx),
            jwt: newTokens.accessToken,
          });
        case "makePaymentFx":
          makePaymentFx({
            ...(payload as IMakePaymentFx),
            jwt: newTokens.accessToken,
          });
          break;
        case "deleteAllFromCartFx":
          deleteAllFromCartFx({
            jwt: newTokens.accessToken,
          });
          break;
        case "addProductsFromLSToCartFx":
          return addProductsFromLSToCartFx({
            ...(payload as IAddProductsFromLSToCartFx),
            jwt: newTokens.accessToken,
          });
        case "deleteCartItemFx":
          return deleteCartItemFx({
            ...(payload as IDeleteCartItemsFx),
            jwt: newTokens.accessToken,
          });
        case "loginCheckFx":
          await loginCheckFx({
            jwt: newTokens.accessToken,
          });
          break;
      }
    }
  }
};
