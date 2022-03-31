import { connect } from "react-redux";
import {fetchPost} from '../actions/index';
import {useEffect} from 'react';
import {style, itemStyle} from './utility/postStyle'
import Author from './Author'
// class Post extends Component{
//     componentDidMount(){
//         this.props.fetchPost();
//     }
//     render(){
//         const style = {
// 			display: "flex",
// 			justifyContent: "center",
// 			width: "100%",
// 			maxWidth: "1200px",
// 			flexWrap: "wrap",
// 			margin: "0 auto",
// 			backgroundColor: "rgb(241,241,241",
//             textAlign:'center',
//             boxSizing:'border-box',
//             padding:'13px',
// 		};
//         const itemStyle = {
// 			padding: "10px",
//             backgroundColor:'white',
//             boxSizing:'border-ox',
//             fontSize:'1.2em',
//             margin:'10px',
//             flex:'40%',
// 		};
//         return (
// 			<div style={style}>
// 				{this.props.posts.map((post) => {
// 					return (
// 						<div style={itemStyle} key={post.id}>
// 							<h3>{post.title}</h3>
// 							<p>{post.body}</p>
// 							<Author id={post.userId} />
// 						</div>
// 					);
// 				})}
// 			</div>
// 		);
//     }
// }

const Post = ({ fetchPost, posts }) => {
	
    useEffect(()=>{
        let len =  posts.length
        fetchPost();
    },[posts.length])
	return (
		<div style={style}>
			{posts.map((post) => {
				return (
					<div style={itemStyle} key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
						<Author id={post.userId} />
					</div>
				);
			})}
		</div>
	);
};
const stateToProps = (state)=>{
    console.log(state)
    return { posts: state.postReducer };
}
export default connect(stateToProps,{
    fetchPost,
})(Post);