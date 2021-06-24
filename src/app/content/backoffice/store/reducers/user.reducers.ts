import { createFeatureSelector, createReducer} from "@ngrx/store";


export interface IUser {
  name: string;
  bonuses: number;
}

export const initialState: IUser = {
  name: 'Ihor',
  bonuses: 0.8
}

const _userReducer = createReducer(
  initialState,
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}

export const selectUser = createFeatureSelector<IUser>('user');

