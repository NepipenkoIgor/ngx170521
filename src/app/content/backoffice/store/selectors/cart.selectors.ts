import { createSelector } from "@ngrx/store";
import { ICartProduct, selectCartProducts } from "../reducers/cart.reducers";
import { IUser, selectUser } from "../reducers/user.reducers";


export const cartProductsWithBonuses = createSelector(
  selectCartProducts,
  selectUser,
  (products: ICartProduct[], user: IUser) => {
    return products.map((product: ICartProduct) => {
      return {...product, price: product.count * product.price * user.bonuses}
    })
  }
)

export const totalPriceOfProductInCart = createSelector(
  cartProductsWithBonuses,
  (products: ICartProduct[]) => {
    return products.reduce((price: number, product: ICartProduct) => {
      const newPrice = product.price + price;
      return newPrice;
    }, 0)
  }
)
