import React from 'react';
import PubSub from 'pubsub-js';

const Publisher = () => {
  const publishMessage = () => {
    PubSub.publish('MY TOPIC', 'Hello from Publisher');
  };

  return (
    <div>
      <button onClick={publishMessage}>Publish Message</button>
    </div>
  );
};

export default Publisher;
