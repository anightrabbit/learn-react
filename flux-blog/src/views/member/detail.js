import React from 'react';

import { Layout } from 'antd'

import PreviewInfo from '../../components/member/PreviewInfo';

const Detail = (props)=> {
	const { location } = props;
	return	<Layout>
		<PreviewInfo data={location.state} loading={true} />
	</Layout>;
}

export default Detail;