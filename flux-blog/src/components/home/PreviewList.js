import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Preview from './Preview';


const PreviewList = (props) => {
	const {loading, error, memberList, loadData, count } = props;

	useEffect(()=>{
		loadData(count);
	},[loadData ,count]);

	return error ? <p>Oops error</p>
		: memberList.map(item => <Preview key={item.email}
																			name={item.name}
																			gender={item.gender}
																			email={item.email}
																			picture={item.picture}
																			id={item.id}
																			loading={loading}
														/>);
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