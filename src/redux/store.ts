import { createStore } from 'redux';
import reducer from './reducer';




export default ()=>{
    const mystore = createStore(
        reducer,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      );
    return mystore;
}
