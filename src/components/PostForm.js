import { useState } from 'react';
import { connect } from 'react-redux';
import { submitPost } from '../redux/actionCreators';
import Modal from 'react-modal';

function PostForm({ signId, submitPost }) {
	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [description, setDescription] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		const newPost = { title, description, image_url: imageUrl };
		submitPost(newPost, signId);
		setTitle('');
		setImageUrl('');
		setDescription('');
	};

	return (
		<>
			<button
				className="form-control btn btn-primary"
				onClick={() => setIsOpen(true)}
			>
				CREATE A POST
			</button>
			<Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label>Title:</label>
						<input
							name="title"
							onChange={(e) => setTitle(e.target.value)}
							value={title}
							className="form-control"
							placeholder="Title"
							autoFocus={true}
						></input>
					</div>
					<br></br>

					<div className="form-group">
						<label>Image URL: </label>
						<input
							name="imageUrl"
							onChange={(e) => setImageUrl(e.target.value)}
							value={imageUrl}
							className="form-control"
						></input>
					</div>
					<br></br>

					<div className="form-group">
						<label>Description:</label>
						<input
							placeholder="Write..."
							type="text"
							className="form-control"
							name="description"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						></input>
					</div>

					<br></br>
					<div className="form-group">
						<button className="form-control btn btn-primary" type="submit">
							SUBMIT
						</button>
					</div>
				</form>
				<button onClick={() => setIsOpen(false)}>Close</button>
			</Modal>
		</>
	);
}

const mapStateToProps = (state) => ({
	signId: state.selectedSign.id,
});

export default connect(mapStateToProps, { submitPost })(PostForm);
