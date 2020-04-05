import React from 'react';

import { Layout } from 'antd'

import PreviewInfo from '../../components/detail/PreviewInfo';

const Detail = (props)=> {
	const { match, location } = props;
	return	<Layout>
		<h1>{match.params.id}</h1>
		<PreviewInfo data={location.state} loading={true} />
	</Layout>;
}

export default Detail;