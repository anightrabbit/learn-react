import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

const Preview = (props) => {
	const { name, gender, email, picture } = props;
	const cardTitle = `${name.first}.${name.last}`;
	return <Card title={cardTitle} extra={gender}>
		<img src={picture.thumbnail} alt={cardTitle} />
	  <p>{email}</p>
	</Card>
}

Preview.propTypes = {
	name: PropTypes.object,
	email: PropTypes.string,
	gender: PropTypes.string,
	picture: PropTypes.object,
}

Preview.defaultProps = {
	name: {},
	email: 'example@company.com',
	gender: 'Miss',
	picture: {},
}

export default Preview;