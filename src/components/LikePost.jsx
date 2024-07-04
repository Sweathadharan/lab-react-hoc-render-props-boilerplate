import React from 'react';
import withLike from './withLike';

function LikePost({ likeCount, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Post {likeCount}</button>
    </div>
  );
}

export default withLike(LikePost, 0);
