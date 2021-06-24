import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { IProduct } from "../../content/products/products.service";
import {
  addProductToCart,
  removeAllProductsFromCart,
  removeProductFromCart,
  updateProductInCart
} from "../actions/cart.actions";


export interface ICartProduct extends IProduct {
  count: number;
}


export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter<ICartProduct>({
  selectId: (product: ICartProduct) => product._id
});


export const initialState = adapter.getInitialState();

const _cartReducer = createReducer(
  initialState,
  on(addProductToCart, (state, {product}) => {
    const entity = state.entities[product._id] as ICartProduct;
    let count = 1;
    if (entity) {
      count = entity.count + 1;
    }
    return adapter.upsertOne({...product, count}, state)
  }),
  on(removeProductFromCart, (state, {_id}) => {
    return adapter.removeOne(_id, state);
  }),
  on(removeAllProductsFromCart, (state) => {
    return adapter.removeAll(state);
  }),
  on(updateProductInCart, (state, {_id, count}) => {
    return adapter.updateOne({id: _id, changes: {count}}, state);
  }),
);


// export const selectProductsState = createFeatureSelector<IProductsState>('products')
// export const filteredProducts = createSelector(
//   selectProductsState,
//   ({items: products, filters: {text, onlyFavorites}}: IProductsState) => {
//     let result: IProduct[] = products;
//     if (onlyFavorites) {
//       result = products.filter((product) => product.isFavorite === onlyFavorites);
//     }
//     if (!text) {
//       return result;
//     }
//     return result.filter((product: IProduct) => {
//       return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
//     })
//   }
// )

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}


export const {selectAll} = adapter.getSelectors();
export const selectCartState = createFeatureSelector<EntityState<ICartProduct>>('cart');

export const selectCartProducts = createSelector(
  selectCartState,
  selectAll
)


export const totalProductsCount = createSelector(
  selectCartProducts,
  (products: ICartProduct[]) => {
    return products.reduce((count, product) => {
      const newCount = product.count + count;
      return newCount;
    }, 0)
  }
)
