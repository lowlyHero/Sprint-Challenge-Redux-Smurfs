import {
  FETCH_SMURF,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL
} from '../actions'


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
  //  addingSmurf: false
  //  updatingSmurf: false
  //  deletingSmurf: false
   error: null
 };

 function reducer(state = initialState, action) {
   switch(action.type) {
     case FETCH_SMURF: 
      return {
       ...state,
     };
     case FETCH_SMURFS_SUCCESS:
       return {
         ...state,
       };
       case FETCH_SMURFS_FAIL:
         return {
           ...state,
           error: action.payload
         }
   }
 }

export default reducer