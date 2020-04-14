import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const Header = () => <Layout.Header className="header">
  <div className="logo" />
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
    <Menu.Item key="2"><Link to="/traveller">Formik</Link></Menu.Item>
  </Menu>
</Layout.Header>

export default Header;
