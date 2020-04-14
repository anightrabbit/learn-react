import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, Avatar, Skeleton } from 'antd';

const LinkMore = ({data}) => {
	const options = {
		pathname: `/member/${data.id.value}`,
    search: "?sort=name",
    hash: "#the-hash",
    state: data
	};
	return <Link to={options}>More</Link>
}
const Description = ({email,gender}) => <p>Gender:{gender}<br />Email:{email}</p>

const Preview = (props) => {
	const { name, gender, email, picture, loading } = props;
	const cardTitle = `${name.first}.${name.last}`;
	return <Card title={cardTitle} extra={<LinkMore data={props} />}>
		<Skeleton loading={loading} avatar active>
			<Card.Meta
	      avatar={<Avatar src={picture.thumbnail} />}
	      title={cardTitle}
	      description={<Description email={email} gender={gender} />}
	    />
	  </Skeleton>
	</Card>
}

Preview.propTypes = {
	name: PropTypes.object,
	email: PropTypes.string,
	gender: PropTypes.string,
	picture: PropTypes.object,
	id: PropTypes.object,
}

Preview.defaultProps = {
	name: {},
	email: 'example@company.com',
	gender: 'Miss',
	picture: {},
	id:{},
}

export default Preview;