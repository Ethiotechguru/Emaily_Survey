import SongItem  from "./SongItem";
// import {useSelector } from "react-redux";
import '../style/listStyle.css'
import {selectSong} from '../actions/index'
import { itemStyle } from "./utility/songItemStyler";
import { connect } from "react-redux";
import { listStyler} from "./utility/songItemStyler";
const SongList = (props)=>{
    // const songs = useSelector((state) => state.songReducer);
    const { listStyle, containerStyle } = listStyler();

    return (
		<div style={containerStyle}>
			<div className="bg">
				<h1>List Of Songs</h1>
			</div>
			<ul style={listStyle}>
				{props.songs.map((song, index) => {
					return (
						<SongItem
							song={song}
							key={index}
							{...song}
							style={itemStyle(song, props.selected)}
							onClick={() => props.selectSong(song)}
						/>
					);
				})}
			</ul>
		</div>
	);

}
const myList = state=>{
    console.log(state);
    return { songs: state.songReducer, selected: state.selectedSongReducer };
}
export default connect(myList, {
	selectSong,
})(SongList);