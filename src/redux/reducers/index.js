//
import { combineReducers } from 'redux';
//
import counterReducer from './counter';
import { CurrentHookId } from './guia_parts'
import { CurrentClassId } from './guia_parts'
import { Counter } from './forClass';

const allReducers = combineReducers({
    counter: counterReducer,
    HookId: CurrentHookId,
    ClassId: CurrentClassId,
    // Parte de la demostración
    count: Counter,
})

export default allReducers;