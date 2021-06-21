import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../products.service";
import { IProductsState } from "../reducers/products.reducers";


export const getProductsPending = createAction('[Products Component] get products pending');
export const getProductsSuccess = createAction('[Products Component] get products success', props<{ products: IProduct[] }>());
export const updateProduct = createAction('[Products Component] update product', props<{ product: IProduct }>());
export const getProductsError = createAction('[Products Component] get products error');
export const setProductsFilter = createAction('[Products Component] set products filters', props<{ filters: Partial<IProductsState['filters']> }>());
