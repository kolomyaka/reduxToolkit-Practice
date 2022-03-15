import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice'

export const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer : rootReducer,
        

    })
} 


// Три базовых типа при инициализации store
export type RootState = ReturnType<typeof rootReducer> // Задаем тип нашему корневому редюсеру (Состояние проекта)
export type AppStore = ReturnType<typeof setupStore> // Задаем тип нашего store
export type AppDispatch = AppStore['dispatch'] // Типизируем dispatch