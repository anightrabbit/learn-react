import React from 'react';

import { Card } from 'antd';

import SignupForm from '../../components/common/SignupForm';
import BasicForm from '../../components/common/BasicForm';


const Detail = (props) => {
	const { params } = props.match;
	const title = parseInt(params.id) ? '编辑出行人' : '添加出行人';
	return <Card title={title} style={{margin:10}}>
		<SignupForm />
		<BasicForm />
	</Card>
}

export default Detail;