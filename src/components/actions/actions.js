export const FETCH_CARDS = 'FETCH_CARDS';

export const fetchCards = cards => ({
    type: FETCH_CARDS,
    payload: cards
});