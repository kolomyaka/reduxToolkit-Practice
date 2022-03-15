import axios from 'axios';
import { IUser } from '../../models/IUser';
import { AppDispatch } from './../store';


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {

        const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users') 
    } catch (e) {
        
    }
}