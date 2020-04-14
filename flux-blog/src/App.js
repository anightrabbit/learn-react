import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import Footer from './layouts/Footer';
import Content from './layouts/Content';
import Header from './layouts/Header';
// import Slider from './layouts/Slider';

import './App.css';


const App = () =>
  <BrowserRouter>
  	<Layout>
  		<Header />
      <Layout>
        {/* <Slider /> */}
			  <Content />
      </Layout>
			<Footer />
  	</Layout>
  </BrowserRouter>

export default App;


