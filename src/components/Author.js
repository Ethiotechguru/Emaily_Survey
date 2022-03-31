import {useEffect} from 'react';
import { fetchUser } from '../actions/index';
import { connect } from 'react-redux';
import {useSelector} from 'react-redux'
const Author = ({ id, fetchUser,users }) => {
	useEffect(() => {
		
		fetchUser(id);
	}, [id]);

	return <div>User Header {id}</div>;
};

// export default Author;
const stateToProps = (state)=>{
    return { users: state.userReducer };
}
export default connect(stateToProps,{
    fetchUser,
})(Author);