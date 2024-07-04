
import React, { useState } from 'react';

function withLike(Component, initialCount = 0) {
  return function WrappedComponent(props) {
    const [likeCount, setLikeCount] = useState(initialCount);

    const handleLike = () => {
      setLikeCount(likeCount + 1);
    };

    return <Component {...props} likeCount={likeCount} handleLike={handleLike} />;
  };
}

export default withLike;
