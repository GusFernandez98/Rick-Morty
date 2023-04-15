import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: payload,
                allCharacters: payload
            }
        
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: payload
            }
        
        case FILTER:
            let filterAllChars = state.allCharacters.filter(char => char.gender === payload);
            return{
                ...state,
                myFavorites: filterAllChars
            }

        case ORDER:
            return{
                ...state,
                myFavorites:
                    payload === "Ascendente"
                    ? state.allCharacters.sort((a, b) => a.id - b.id)
                    : state.allCharacters.sort((a, b) => b.id - a.id)
                    //sort recibe un cb -> adetro esta lo que queremos evaluar.
                    //Caso contrario se evalua lo segundo (despues de los :)
            }
            
        
        default:
            return {...state}
    }
}

export default reducer;