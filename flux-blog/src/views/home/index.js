import React from 'react';
import {
	Layout
} from 'antd';
import { Container } from 'flux/utils';

import PreviewList from '../../components/home/PreviewList';

import { memberListActions } from '../../flux/actions';
import { memberListStore } from '../../flux/stores';


const getStores = () => [memberListStore];

const calculateState = () => memberListStore.getState();

const Home = (props) => {
	console.log(props);
	return <Layout>
		<h1>Home</h1>
		<PreviewList count={10} {...props} loadData={memberListActions.fetchData} />
	</Layout>;
}

export default Container.createFunctional(Home, getStores, calculateState);