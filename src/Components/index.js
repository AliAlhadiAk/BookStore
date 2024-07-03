import { configureStore } from '@reduxjs/toolkit';
import { SiRedux } from 'react-icons/si';
import authReducer from './auth'


const store = configureStore({
    reducer:{
        auth:authReducer,


    }
})
export default store;