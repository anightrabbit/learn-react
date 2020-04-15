import React from 'react';
import {
	Layout
} from 'antd';
import { Container } from 'flux/utils';
import { fetchTravellerListData, fetchMemberListData } from '../../flux/actions';
import { appStore } from '../../flux/stores';
import CardGridList from '../../components/traveller/CardGridList';
import PreviewList from '../../components/member/PreviewList';


const getStores = () => [appStore];

const calculateState = () => appStore.getState();

const Home = (props) => {
	const { traveller, member } = props;
	return <Layout>
		<h1>Welcome</h1>
	  <CardGridList count={4} {...traveller} loadData={fetchTravellerListData} />
	  <PreviewList count={10} {...member} loadData={fetchMemberListData} />
	</Layout>;
}

export default Container.createFunctional(Home, getStores, calculateState);