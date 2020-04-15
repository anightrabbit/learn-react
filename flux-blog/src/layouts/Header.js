import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const Header = () => <Layout.Header className="header">
	<h1 className="logo"><Link to="/">Logo</Link></h1>
  <Menu theme="dark" mode="horizontal">
    <Menu.Item key="1"><Link to="/member">Virtual List</Link></Menu.Item>
    <Menu.Item key="2"><Link to="/traveller">Formik</Link></Menu.Item>
  </Menu>
</Layout.Header>

export default Header;
