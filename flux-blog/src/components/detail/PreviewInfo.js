import React from 'react';
import PropTypes from 'prop-types';

import { Card, Skeleton, Avatar } from 'antd';

const PreviewInfo = ({data}) => {
  const { name, gender, email, picture, loading, id } = data;
  const cardTitle = `${name.first}.${name.last}`;
	return <Card title={cardTitle} extra={'NO:'+id.value} style={{margin:10}}>
    <Skeleton loading={loading} avatar active>
      <Card.Meta
        avatar={<Avatar src={picture.thumbnail} />}
        title={cardTitle}
        description={email+gender}
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