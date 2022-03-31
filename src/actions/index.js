import apiData from "../Apis/apiData";

export const fetchSongs = (songs)=>{
    return{
        type:'ON_LOAD',
        payload:songs,
    }
}
export const selectSong = (song)=>({
        type:'SELECT_SONG',
        payload:song,
})

export const removeSong = ()=>{
    return {
		type: "REMOVE_SONG",
		payload: null,
	};
}

export const fetchPost = () =>{
    return async dispatch => {
		const response = await apiData.get("/posts");
		dispatch({ type: "FETCH_POST", payload: response.data });
    }
};
export const fetchUser = (id)=>{
    return async (dispatch)=>{
        console.log("first");
        const users = await apiData.get(`/users/${id}`);
        console.log(users,'is coming from here')
        dispatch({type:'FETCH_USER', payload:users.data})
    }
}
