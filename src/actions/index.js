export const selectSong = (song)=>{
    return{
        type:'SELECT_SONG',
        payload:song,
    }
}
export const removeSong = ()=>{
    return {
		type: "REMOVE_SONG",
		payload: null,
	};
}
