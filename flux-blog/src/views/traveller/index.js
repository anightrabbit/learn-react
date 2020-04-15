import React from 'react';
import {
	Layout
} from 'antd';
// import { Container } from 'flux/utils';

import CardGridList from '../../components/traveller/CardGridList';

import { fetchTravellerListData } from '../../flux/actions';
// import { travellerListStore } from '../../flux/stores';


// const getStores = () => [travellerListStore];

// const calculateState = () => travellerListStore.getState();

const Traveller = (props) => {
	return <Layout>
		<CardGridList count={4} {...props} loadData={fetchTravellerListData} />
	</Layout>;
}

// export default Container.createFunctional(Traveller, getStores, calculateState);
export default Traveller