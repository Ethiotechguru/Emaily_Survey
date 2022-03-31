import { Link } from "react-router-dom";


function Nav(props) {
    return (
		<div className="navigation">
			<span onClick={props.onClick}>
				<Link to="/">Home</Link>
			</span>

			{/* <Link to="/detail">Detail</Link> */}
		</div>
	);
}

export default Nav;