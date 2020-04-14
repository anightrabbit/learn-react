import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, Avatar } from 'antd';

const Description = ({email,gender}) => <p>Gender:{gender}<br />Email:{email}</p>

const CardGrid = (props) => {
	const { name, gender, email, picture, id } = props;
	const cardTitle = `${name.first}.${name.last}`;
	return <Card.Grid>
		<Link to={`/traveller/${id.value}`}><Card.Meta
    	avatar={<Avatar src={picture.thumbnail} />}
    	title={cardTitle}
    	description={<Description email={email} gender={gender} />}
  	/></Link>
  </Card.Grid>
}

CardGrid.propTypes = {
	name: PropTypes.object,
	email: PropTypes.string,
	gender: PropTypes.string,
	picture: PropTypes.object,
	id: PropTypes.object,
}

CardGrid.defaultProps = {
	name: {},
	email: 'example@company.com',
	gender: 'Miss',
	picture: {},
	id:{},
}

export default CardGrid;