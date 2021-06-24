import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../content/products/products.service";


export const addProductToCart = createAction('[Cart Component] add product', props<{product: IProduct}>());
export const removeProductFromCart = createAction('[Cart Component] remove product', props<{_id: string}>());
export const removeAllProductsFromCart = createAction('[Cart Component] remove  all product');
export const updateProductInCart = createAction('[Cart Component] update product', props<{_id: string, count: number}>());

