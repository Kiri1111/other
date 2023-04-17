import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {persist} from 'zustand/middleware';
import {v1} from "uuid";

type ProductType = {
    id: string
    title: string
    price: number
}

type AccountState = { productsState: ProductType[] }


const initialValue = [
    {id: v1(), title: 'Кеды', price: 120},
    {id: v1(), title: 'Кроксы', price: 100},
    {id: v1(), title: 'Тапки', price: 90},
    {id: v1(), title: 'Туфли', price: 200}
]


export const useCreateShopStore = create(persist(immer<AccountState>((set) => ({
    productsState: [...initialValue],
})), {name: 'shop'}))

export const selectProduct = (state: AccountState) => state.productsState
