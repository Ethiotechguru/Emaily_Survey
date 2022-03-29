import {songs} from './listOfData'
import { combineReducers } from 'redux'
const songReducer = ()=>{
    return songs
}

const selectedSongReducer = (selectedSong=null, action)=>{
    switch (action.type) {
		case "SELECT_SONG":
			return action.payload;
        default:
			return selectedSong;
	}
}

export const songReducers = combineReducers({
    songReducer,
    selectedSongReducer,
})
