
//
import { useDispatch, useSelector } from 'react-redux';
import {Counter} from '../redux/actions';

export const ConRedux = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    // Al dar clic el counter pasará a ser cuatro
    return(<h3
    onClick={
      () => {
          dispatch(Counter(4));
      }  
    }
    >count: {count}</h3>);
}