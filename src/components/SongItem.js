// import { connect } from "react-redux";
const SongItem = (props) => {
	return (
		<li
			style={props.style}
			onClick={props.onClick}
		>
			<h3>Title: {props.title}</h3>
			<div>Length: {props.length}</div>
		</li>
	);
};

export default  SongItem;
