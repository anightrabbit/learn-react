import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

const Nav = () => (
  <nav className="nav">
    <Button><Link to="/">Home</Link></Button>
  </nav>
);

export default Nav;
