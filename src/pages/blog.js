import React from 'react';



// The individual post component
const Post = props => (
	<article className="post">
		<h2 className="post-title">{props.title}</h2>
		<hr/>
		<p className="post-content">{props.content}</p>	
	</article>
);

// The form component

 class Forms extends React.Component {

	handleContentChange = event => {
		this.props.content = event.target.value;
	};

	handleSubmit = event => {
		alert();
		event.preventDefault();
	};
}

// The posts loop component

export default class Posts extends React.Component {
	state = {
		posts: [
			{
				title: "This is the post title",
				content: "This is the post content",
				// imgURL: "https://image.ibb.co/moXNRp/javascript_arrays.jpg"
				// category: {React, Javascript, Es6}
			},
			{
				title: "This is the second post title",
				content: "This is the post content",
				// imgURL: "https://image.ibb.co/jRzfCU/cascade.jpg"
				// category: {React, CSS, Es6}
			},
			{
				title: "This is the third post title",
				content: "This is the post content",
				// imgURL: "https://image.ibb.co/cb4DXU/minmax_function.jpg"
				// category: {React, HTML}
			}
		],
		post: {
			title: "",
			content: ""
		}
	};

	handleChange =  (event) =>  {
		const name = event.target.name;
		const value = event.target.value;
		// const title = this.state.post.title;
		// const content = this.state.post.content;
		// let newTitle ="";
		// let newContent ="";
		const { post } = this.state;
		// if (name === 'title'){
		// 	newTitle = value;
		// }
		// if (name === 'content'){
		// 	newContent = value;
		// }
		const newPost = {
      ...post,
      [name] : value
    };
		this.setState({ post: newPost });
		console.log(event.target.value);
		console.log(this.state.post.title);
		console.log(name);
		// this.setState({ [name] : value });
  }

	handleSubmit = (event) => {
		const post = this.state.post;
		const posts = this.state.posts;
		const newPosts = Array.from(posts);
		newPosts.push(post);
		this.setState({
			posts: newPosts
		});
		console.log(post);
		event.preventDefault();
	};


	render() {
		const posts = this.state.posts.map(post => {
			return (
				<Post
					key={post.id}
					{...post}
					// category={post.category}
				/>
			);
		});

		return (
			<React.Fragment>
				{posts}
				<form  className="new-post-form" onSubmit={this.handleSubmit}>
					<label>
						Post title
						<input
							className="title-input"
							type="text"
							name="title"
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Post content
						<input
							className="content-input"
							type="text"
							name="content"
							onChange={this.handleChange}
						/>
					</label>
					<input className="submit-button" type="submit" value="submit" />
				</form>
			</React.Fragment>
		);
	}
}

// class App extends React.Component {
// 	render() {
// 		return (
			
// 		);
// 	}
// }

