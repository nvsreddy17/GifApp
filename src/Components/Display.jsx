import React from 'react';
import Card from './Card';

const Display = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <Card key={image.id} gif={image} />
  });

  return (
    <ul className="gif-list">{gifItems}</ul>
  );
};

export default Display;