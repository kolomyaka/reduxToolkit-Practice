import { IUser } from './../../models/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    users : IUser[],
    isLoading : boolean
    error : string
}

// Создаем состояние нашего редюсера (Слайса)
const initialState: UserState = {
    users: [],
    isLoading : false,
    error : '',
}


// Slice некая оболочка над редюсером ( Встроенная функция в redux toolkit, которая упрощает работу с редьюсерами ).
// Одна из особенностей --> Мы можем мутировать наше состояние ( Необязательно делать копию нашего state ).

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        usersFetching(state) {    // Как и в обычных reducers создаем функцию, которой передаем наш state и action ( Action можем сразу типизировать )
            state.isLoading = true
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = true
            state.error = ''
            state.users = action.payload
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = true
            state.error = action.payload
        }                                            
    }
})

export default userSlice.reducer;