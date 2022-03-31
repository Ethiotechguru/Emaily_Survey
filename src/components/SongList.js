import SongItem  from "./SongItem";
import '../style/listStyle.css'
import {selectSong} from '../actions/index'
import { itemStyle, listStyler } from "./utility/songItemStyler";
import { connect } from "react-redux";
let SongList = ({songs, selected, selectSong,}) => {
	const { listStyle, containerStyle } = listStyler();
	const selectionHandler = (song)=>{
		selectSong(song)
	}
	if(songs.length<=0){
		const style = {
			margin:'0 auto',
			width:'500px'
		}
		return (
			<div style={style}>
				<img style={{textAlign:'center',width:'100%'}}
					src="https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif"
					alt="loading"
				/>
			</div>
		);
	}
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
    return { songs: state.songReducer, selected: state.selectedSongReducer };
}
export default connect(stateToProp, {
	selectSong,
})(SongList);