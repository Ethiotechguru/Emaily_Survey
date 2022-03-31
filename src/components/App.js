import SongList from './SongList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { removeSong } from '../actions';
import Nav from './Nav';
import Detail from './Detail'
function App(props) {
	console.log(props)
	return (
		<div>
			<BrowserRouter>
				<div className="bg">
					<h1>Song List</h1>
				</div>

				<Nav onClick={props.removeSong} />
				{props.song && <Detail />}
				<Routes>
					<Route path="/" element={<SongList />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
const stateToProps = (state)=>{
	return { song: state.selectedSongReducer };
}
export default connect(stateToProps,{
	removeSong,
})(App);