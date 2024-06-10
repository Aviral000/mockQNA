import React from 'react';

function practise(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default practise;
