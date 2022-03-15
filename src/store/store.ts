import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { postAPI } from '../services/PostService';
import userReducer from './reducers/UserSlice'

export const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer : rootReducer,
        middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)

    })
} 


// Три базовых типа при инициализации store
export type RootState = ReturnType<typeof rootReducer> // Задаем тип нашему корневому редюсеру (Состояние проекта)
export type AppStore = ReturnType<typeof setupStore> // Задаем тип нашего store
export type AppDispatch = AppStore['dispatch'] // Типизируем dispatch