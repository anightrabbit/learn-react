import React from 'react';
import PropTypes from 'prop-types';

import { Card, Skeleton, Avatar } from 'antd';


const DescriptionInfo = ({email,gender}) => <p>Gender:{gender}<br />Email:{email}</p>

const PreviewInfo = ({data}) => {
  const { name, gender, email, picture, loading, id } = data;
  const cardTitle = `${name.first}.${name.last}`;
	return <Card title={cardTitle} extra={'NO:'+id.value} style={{margin:10}}>
    <Skeleton loading={loading} avatar active>
      <Card.Meta
        avatar={<Avatar src={picture.large} size={200} />}
        title={cardTitle}
        description={<DescriptionInfo email={email} gender={gender} />}
      />
    </Skeleton>
  </Card>
}

PreviewInfo.propTypes = {
	data: PropTypes.object,
  loading: PropTypes.bool,
}

PreviewInfo.defaultProps = {
	data: {},
  loading: true,
}

export default PreviewInfo;