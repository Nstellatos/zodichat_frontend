import { useEffect } from 'react';
import { getSigns } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { SignCard } from '../components';

function SignIndex({ getSigns, signs }) {
	useEffect(getSigns, [getSigns]);

	return (
		<>
			<div className="signs">
				{signs.map((sign) => (
					<SignCard {...sign} key={sign.id} />
				))}
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return { signs: state.signs };
};

export default connect(mapStateToProps, { getSigns })(SignIndex);
