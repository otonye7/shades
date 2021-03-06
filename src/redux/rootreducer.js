import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['header']
}

const rootReducer = combineReducers({
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer)