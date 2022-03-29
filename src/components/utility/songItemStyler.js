export const itemStyle = (s, selected) => {
	return {
		flex: selected && s.title === selected.title ? "100%" : "300px",
		height: selected && s.title === selected.title ? "200px" : "",
		backgroundColor:
			selected && s.title === selected.title ? "white" : "aqua",
		padding: "10px",
		marginRight: "10px",
		marginBottom: "10px",
		boxShadow: "1px 1px 6px",
		boxSizing: "borderBox",
		border:
			selected && s.title === selected.title ? "2px solid maroon" : "",
	};
};

export const listStyler = ()=>{
    const listStyle = {
        backgroundColor: "rgb(232,232,232)",
        width: 100 + "%",
        maxWidth: 1700 + "px",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexWrap: "wrap",
        
        listStyle: "none",
        padding: "0",
        paddingTop: "20px",
    };
    const containerStyle = {
		backgroundColor: "rgb(232,232,232)",
		width: 100 + "%",
		maxWidth: 1700 + "px",
		textAlign: "center",
		margin: "0 auto",
	};
    return {
		listStyle,
		containerStyle,
	};
}