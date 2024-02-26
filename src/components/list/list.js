import React from 'react';

const List = ({items, renderItem}) => {
  return (
    <>{items && items.map(renderItem && renderItem)}</>
  );
};

export default List;