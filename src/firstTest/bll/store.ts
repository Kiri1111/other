import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {persist} from 'zustand/middleware';


type AccountState = {}

const initialValue = {}

export const useCreateShopStore = create(persist(immer<AccountState>((set) => ({
    userState: {
        ...initialValue
    },

})), {name: 'shop'}))

// export const selectClearState = (state: AccountState) => state.clearState
