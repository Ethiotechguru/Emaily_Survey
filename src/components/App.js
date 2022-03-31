import SongList from './SongList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { songs } from "../reducers/listOfData";
import {useEffect} from 'react'
import { removeSong, fetchSongs } from "../actions";
import Post from './PostList';
import {useDispatch,useSelector } from 'react-redux';
import Nav from './Nav';
import Detail from './Detail'
function App() {

	const dispatch = useDispatch();
	const song = useSelector((state) => state.selectedSongReducer);

	useEffect(()=>{
		dispatch(fetchSongs(songs));
	},[dispatch])
	
	return (
		<div>
			<BrowserRouter>
				<div className="bg">
					<h1>Song List</h1>
				</div>
				<Nav onClick={() => dispatch(removeSong())} />

				{song && <Detail />}
				<Routes>
					<Route path="/" element={<SongList />}></Route>
					<Route path="/posts" element={<Post />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
// const stateToProps = (state)=>{
// 	return { song: state.selectedSongReducer };
// }
// export default connect(stateToProps,{
// 	removeSong,
// })(App);