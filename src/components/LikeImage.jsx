import React from 'react';
import withLike from './withLike';

function LikeImage({ likeCount, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Image {likeCount}</button>
    </div>
  );
}

export default withLike(LikeImage, 0); 
