import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

const Nav = () => (
  <nav className="nav">
    <Button><Link to="/">Home</Link></Button>
    <Button><Link to="/detail/1">Detail/1</Link></Button>
    <Button><Link to="/detail/2">Detail/2</Link></Button>
  </nav>
);

export default Nav;
