import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import Nav from './layouts/Nav';
import Routes from './routes/';

import './App.css';

const { Header, Footer, Content } = Layout;


const App = () =>
  <BrowserRouter>
  	<Layout>
  		<Header>
    		<Nav />
  		</Header>
			<Content>
			  <Routes />
			</Content>
			<Footer>
				@2020 anightrabbi@gmail.com
			</Footer>
  	</Layout>
  </BrowserRouter>

export default App;


