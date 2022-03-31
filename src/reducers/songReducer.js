import { combineReducers } from 'redux';

const songReducer = (state=[], action)=>{
    switch (action.type) {
		case 'ON_LOAD':
            return action.payload;
		default:
			return state;
	}
}
const postReducer = (state = [], action) => {
	switch (action.type) {
		case "FETCH_POST":
			return action.payload;
		default:
			return state;
	}
};
const selectedSongReducer = (selectedSong=null, action)=>{
    switch (action.type) {
		case "SELECT_SONG":
			return action.payload;
        case 'REMOVE_SONG':
            return action.payload;
        default:
			return selectedSong;
	}
}
const userReducer = (state=[], action)=>{
    console.log(action)
    switch (action.type) {
		case "FETCH_USER":
			return [...state, action.payload];
		default:
			return state;
	}
}
export const reducer = combineReducers({
	songReducer,
	selectedSongReducer,
	postReducer,
	userReducer,
});
