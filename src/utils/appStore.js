import { configureStore } from '@reduxjs/toolkit'
import userReducer  from '../utils/userSlice'
import moviesReducer from '../utils/movieSlice';
import gptReducer from '../utils/gptSlice';
import langReducer from '../utils/configSlice';
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gptItem:gptReducer,
        langConfig:langReducer,
    },
})

export default appStore;