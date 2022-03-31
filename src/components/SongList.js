import SongItem  from "./SongItem";
import '../style/listStyle.css'
import {selectSong} from '../actions/index'
import { itemStyle, listStyler } from "./utility/songItemStyler";
import { connect } from "react-redux";
const SongList = ({songs, selected, selectSong,}) => {

	const { listStyle, containerStyle } = listStyler();
	const selectionHandler = (song)=>{
		selectSong(song)
	}
	console.log(selected)
	return (
		<div style={containerStyle}>
			{!selected&&<ul style={listStyle}>
				{songs.map((song, index) => {
					return (
						<SongItem
							song={song}
							key={index}
							{...song}
							style={itemStyle(song, selected)}
							onClick={() => selectionHandler(song)}
						/>
					);
				})}
			</ul>}
		</div>
	);
};
const stateToProp = state=>{
    console.log(state);
    return { songs: state.songReducer, selected: state.selectedSongReducer };
}
export default connect(stateToProp, {
	selectSong,
})(SongList);