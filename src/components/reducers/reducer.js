import {FETCH_CARDS} from '../actions/actions';

const initialState = {
    cards: [],
}

const cardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARDS: 
            return {
                ...state,
                cards: action.payload
            }
        default: 
            return state;
    }
}

export default cardsReducer;
export const getCards = state => state.cards;
