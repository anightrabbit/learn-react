import React from 'react';
import {
	Layout
} from 'antd';
// import { Container } from 'flux/utils';

import PreviewList from '../../components/member/PreviewList';

import { fetchMemberListData } from '../../flux/actions';
// import { appStore } from '../../flux/stores';


// const getStores = () => [appStore];

// const calculateState = () => appStore.getState();

const Member = (props) => {
	console.log(props);
	return <Layout>
		<PreviewList count={10} {...props} loadData={fetchMemberListData} />
	</Layout>;
}

// export default Container.createFunctional(Member, getStores, calculateState);
export default Member;