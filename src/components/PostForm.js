import { useState } from 'react';
import { connect } from 'react-redux';
import { submitPost } from '../redux/actionCreators';

function PostForm({ signId, submitPost }) {
	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [description, setDescription] = useState('');

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
			<div className="sidebar">
				<div className="write">
					<h1>CREATE A POST</h1>
					<form className="writeform" onSubmit={onSubmit}>
						<div className="writeFormGroup">
							<input
								name="title"
								onChange={(e) => setTitle(e.target.value)}
								value={title}
								className="writeInput"
								placeholder="Title"
								autoFocus={true}
							></input>
						</div>
						<br></br>
						<label>
							Image:
							<div className="writeFormGroup">
								<textarea
									name="imageUrl"
									onChange={(e) => setImageUrl(e.target.value)}
									value={imageUrl}
								></textarea>
							</div>
						</label>
						<br></br>
						<label>
							Description:
							<div className="writeFormGroup">
								<textarea
									placeholder="Write..."
									type="text"
									className="writeInput writeText"
									name="description"
									onChange={(e) => setDescription(e.target.value)}
									value={description}
								></textarea>
							</div>
						</label>
						<br></br>
						<button className="writeSubmit" type="submit">
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	signId: state.selectedSign.id,
});

export default connect(mapStateToProps, { submitPost })(PostForm);
