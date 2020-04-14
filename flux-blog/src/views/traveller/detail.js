import React from 'react';

import { Card } from 'antd';

const Detail = (props) => {
	const { params } = props.match;
	const title = params.id ? '编辑出行人' : '添加出行人';
	return <Card title={title} style={{margin:10}}>
		<p>表单</p>
	</Card>
}

export default Detail;