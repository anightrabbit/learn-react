import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import CardGrid from './CardGrid';
import CardGridAdd from './CardGridAdd';

const cardStyle = {
	margin: 10
}

const CardGridList = (props) => {
	const {loading, error, travellerList, loadData, count } = props;

	useEffect(()=>{
		loadData(count);
	},[loadData, count]);

	return <Card title="常用出行人" extra={<CardGridAdd />} style={cardStyle}>
		{
			error ? <p>Oops error</p>
			: travellerList.length > 0 && travellerList.map(item => <CardGrid
																		key={item.email}
																		name={item.name}
																		gender={item.gender}
																		email={item.email}
																		picture={item.picture}
																		id={item.id}
																		loading={loading}
																	/>)
		}
  </Card>;
}
	

CardGridList.propTypes = {
	travellerList: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool,
	error: PropTypes.bool,
	loadData: PropTypes.func,
	count: PropTypes.number,
}

CardGridList.defaultProps = {
	travellerList: [],
	loading: true,
	error: false,
	loadData: f=>f,
	count: 10,
}

export default CardGridList;