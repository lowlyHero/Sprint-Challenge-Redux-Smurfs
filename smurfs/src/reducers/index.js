import {
  FETCH_SMURF,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  ADD_SMURF,
  ADD_FAIL
} from '../actions';

const initialState = {
   smurfs: [],
   addingSmurf: false,
   isLoading: false,
   error: ''
 };

 function reducer(state = initialState, action) {
   switch(action.type) {
     case FETCH_SMURF: 
       return {
        ...state,
        isLoading: true
     };
     case FETCH_SMURFS_SUCCESS:
       return {
         ...state,
         smurfs: action.payload,
         isLoading: false,
         error: ''
       };
       case FETCH_SMURFS_FAIL:
         return {
           ...state,
           isLoading: false,
           error: action.payload
         };
         case ADD_SMURF:
           return {
             ...state,
             addingSmurf: true,
             isLoading: false,
             error: ''
           }
           case ADD_FAIL: 
           return {
             ...state,
             error: action.payload
           }
         default:
           return state;
   }
 }

export default reducer;