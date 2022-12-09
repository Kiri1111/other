export type InitialStateType = typeof initialState
type ActionsType = ChangeValueACType | ChangeMinValueACType | resetValueACACType
type ChangeValueACType = ReturnType<typeof changeValueAC>
type ChangeMinValueACType = ReturnType<typeof changeMinValueAC>
type resetValueACACType = ReturnType<typeof resetValueAC>
const initialState = {
    value: 0
}

export const ChangeValueReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case'CHANGE-VALUE': {
            return {...state, value: state.value + 1}
        }
        case 'CHANGE-MIN-VALUE': {
            return {...state, value: action.payload.minValue}
        }
        case 'RESET-VALUE': {
            return {...state, value: action.payload.minValue}
        }
        default:
            return state
    }
}

export const changeValueAC = () => {
    return {
        type: 'CHANGE-VALUE'
    } as const
}
export const changeMinValueAC = (minValue: number) => {
    return {
        type: 'CHANGE-MIN-VALUE',
        payload: {
            minValue
        }
    }
}
export const resetValueAC = (minValue: number) => {
    return {
        type: 'RESET-VALUE',
        payload: {
            minValue
        }
    } as const
}
