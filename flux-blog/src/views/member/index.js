import React from 'react';
import {
	Layout
} from 'antd';
import { Container } from 'flux/utils';

import PreviewList from '../../components/member/PreviewList';

import { Actions } from '../../flux/actions';
import { memberListStore } from '../../flux/stores';


const getStores = () => [memberListStore];

const calculateState = () => memberListStore.getState();

const Home = (props) => {
	return <Layout>
		<PreviewList count={10} {...props} loadData={Actions.fetchMemberListData} />
	</Layout>;
}

export default Container.createFunctional(Home, getStores, calculateState);