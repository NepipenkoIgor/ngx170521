import { IProduct } from "../../products.service";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { getProductsPending, getProductsSuccess, setProductsFilter, updateProduct } from "../actions/products.actions";


export interface IProductsState {
  items: IProduct[],
  isLoading: boolean,
  filters: {
    text: string,
    onlyFavorites: boolean
  }
}

export const initialState: IProductsState = {
  items: [],
  isLoading: false,
  filters: {
    text: '',
    onlyFavorites: false
  }
};

const _productsReducer = createReducer(
  initialState,
  on(getProductsPending, (state) => {
    return {...state, isLoading: true};
  }),
  on(getProductsSuccess, (state, {products}) => {
    return {...state, items: products, isLoading: false};
  }),
  on(updateProduct, (state, {product}) => {
    const index = state.items.findIndex((p) => p._id === product._id);
    state.items.splice(index, 1, product);
    return {...state, items: [...state.items], isLoading: false};
  }),
  on(setProductsFilter, (state, {filters}) => {
    return {...state, filters: {...state.filters, ...filters}};
  }),
);


export const selectProductsState = createFeatureSelector<IProductsState>('products')
export const filteredProducts = createSelector(
  selectProductsState,
  ({items: products, filters: {text, onlyFavorites}}: IProductsState) => {
    let result: IProduct[] = products;
    if (onlyFavorites) {
      result = products.filter((product) => product.isFavorite === onlyFavorites);
    }
    if (!text) {
      return result;
    }
    return result.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
    })
  }
)

export function productsReducer(state: any, action: any) {
  return _productsReducer(state, action);
}
