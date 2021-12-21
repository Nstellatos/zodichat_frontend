import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function PostCard({
	id,
	title,
	description,
	imageUrl,
	username,
}) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardHeader title={title} subheader={username} />
				<CardMedia component="img" height="194" image={imageUrl} alt={title} />
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						<p className="postDesc">{description}</p>
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>{description}</CardContent>
				</Collapse>
			</Card>
		</>
	);
}

/*
import { Link } from 'react-router-dom';

function PostCard({ id, title, description, imageUrl }) {
	return (
		<div className="post">
			<Link to={`/posts/${id}`}>
				<img className="postImg" src={imageUrl} alt={title} />
			</Link>
			<div className="postInfo">
				<span className="postTitle">
					<Link to={`/posts/${id}`}>
						<h3>{title}</h3>
					</Link>
				</span>
			</div>
			<p className="postDesc">{description}</p>
		</div>
	);
}
export default PostCard;
*/
