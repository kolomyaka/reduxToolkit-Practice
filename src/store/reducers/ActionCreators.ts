import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../models/IUser';
import { AppDispatch } from './../store';
import { userSlice } from './UserSlice';


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())  // Обрабатываем запрос на сервер
//         const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')  // Производим запрос на сервер
//         dispatch(userSlice.actions.usersFetchingSuccess(res.data)) // Обрабатываем ситуацию при успешном ответе от сервера
//     } catch (error) {
//         dispatch(userSlice.actions.usersFetchingError(`Ошибка: ${error}`))  // Обрабатываем ошибку от сервера
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')  // Производим запрос на сервер
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(`Не удалось загрузить пользователей, ошибка : ${error}`)
        }

    }
)