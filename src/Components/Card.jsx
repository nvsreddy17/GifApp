import React from 'react';

const Card = (image) => {
  return (
    <li>
      <img className="gif-item" alt="Gif" src={image.gif.images.downsized.url} />
    </li>
  )
};

export default Card;
