import {createStore, combineReducers} from 'redux';

import numeroReduceres from './reducers/numeroActionCreator';

const reduceres = combineReducers(
    {
        numeros: numeroReduceres
    }
)

function storeConfig(){
    return createStore(reduceres)
}

export default storeConfig;