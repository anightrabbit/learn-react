import React from 'react';
import {
	Layout
} from 'antd';
import { Container } from 'flux/utils';

import PreviewList from '../../components/member/PreviewList';

import { fetchMemberListData } from '../../flux/actions';
import { memberListStore } from '../../flux/stores';


const getStores = () => [memberListStore];

const calculateState = () => memberListStore.getState();

const Member = (props) => {
	return <Layout>
		<PreviewList count={10} {...props} loadData={fetchMemberListData} />
	</Layout>;
}

export default Container.createFunctional(Member, getStores, calculateState);