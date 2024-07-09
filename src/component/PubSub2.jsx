import React, { useEffect } from 'react';
import PubSub from 'pubsub-js';

const Subscriber = () => {
  useEffect(() => {
    const token = PubSub.subscribe('MY TOPIC', (msg, data) => {
      alert(`Received message: ${data}`);
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  return <div>Subscriber Component</div>;
};

export default Subscriber;
