import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import Preview from './Preview';

const cardStyle = {
	margin: 10
}

const PreviewList = (props) => {
	const {loading, error, memberList, loadData, count } = props;

	useEffect(()=>{
		loadData(count);
	},[loadData, count]);
	return <Card title="会员列表" style={cardStyle}>
	{	error ? <p>Oops error</p>
		: memberList.map(item => <Preview key={item.email}
																			name={item.name}
																			gender={item.gender}
																			email={item.email}
																			picture={item.picture}
																			id={item.id}
																			loading={loading}
														/>)
	}
	</Card>
}
	

PreviewList.propTypes = {
	memberList: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool,
	error: PropTypes.bool,
	loadData: PropTypes.func,
	count: PropTypes.number,
}

PreviewList.defaultProps = {
	memberList: [],
	loading: true,
	error: false,
	loadData: f=>f,
	count: 10,
}

export default PreviewList;