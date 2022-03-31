// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {listStyler} from "./utility/songItemStyler";
import {removeSong} from '../actions/index'
const Detail = () => {
    const song = useSelector((state) => state.selectedSongReducer);
    const dispatch = useDispatch();
    const { listStyle } = listStyler();
	const style = {
		flex: song && song.title ? "100%" : "300px",
		height: song && song.title ? "200px" : "",
		backgroundColor: song && song.title ? "white" : "",
		padding: "10px",
		marginRight: "10px",
		marginBottom: "10px",
		boxShadow: "1px 1px 6px",
		boxSizing: "borderBox",
		border: song && song.title ? "2px solid maroon" : "",
	};
	return (
		<div style={listStyle}>
			<div style={style}>
				<span onClick={() => dispatch(removeSong())}>X</span>
				<h3>Title: {song.title}</h3>
				<div>Length: {song.length}</div>
			</div>
		</div>
	);
};
export default Detail;
// const stateToProp = (state) => {
//     return { song: state.selectedSongReducer };
// };
// export default connect(stateToProp,{
//     removeSong,
// })(Detail);