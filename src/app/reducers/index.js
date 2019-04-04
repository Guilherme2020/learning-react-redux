import {combineReducers} from 'redux';
import clientesReducer from './clientesReducer'
// import { ADICIONAR_UM } from '../actions/types';

// const valoresReducer = (state = {valor:0},action) => {
    
//     switch(action.type){
//         case ADICIONAR_UM:
//             return {...state,valor: state.valor + 1}
//         default:
//             return state;
//     }
    
// } 

const rootReducer = combineReducers({
    clientes : clientesReducer
})

export default rootReducer;


//valor 0

//action.type ===Adicionar_UM

//valor 1
