import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

const CardGridAdd = () =>
	<Link to="/traveller/0"><PlusOutlined twoToneColor="#eb2f96" />添加出行人</Link>

export default CardGridAdd;