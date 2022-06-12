//import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import { configureStore} from '@reduxjs/toolkit';
//import thunk from 'redux-thunk';




/*export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;*/
function dateFormatting(date: Date):string {return(date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2, "0")+'-'+String(date.getDate()).padStart(2, "0"))};
const reducer = (state: any = { calls:{results: undefined}, 
                                Filter: {
                                  typeFilter: "Все типы",
                                  periodFilterName: "3 дня",
                                  periodFilter: [dateFormatting(new Date(new Date().getTime()-(1000*60*60*24*3))),  dateFormatting(new Date())]},
                                },
                                 
                action: any)=>{    
                                      switch (action.type){
    
                                        case "FETCH_DATA_SUCCESS":{
                                          return { ...state, calls: action.payload} ;
                                        };  
     
                                         case "DISPATCH CHOSEN PERIOD":{
                                          let newState=JSON.parse(JSON.stringify(state));
                                          newState.Filter.periodFilterName = action.payload.name;
                                          newState.Filter.periodFilter = action.payload.value;
                                          return newState ;
                                        }; 
                                        case "DISPATCH CHOSEN TYPE":{
                                          return { ...state, Filter:{typeFilter: action.payload, periodFilterName: state.Filter.periodFilterName, periodFilter: state.Filter.periodFilter}} ;
                                        }; 


                                        default: return state;
                                      } ;
                  };

export const store = configureStore({ reducer });
