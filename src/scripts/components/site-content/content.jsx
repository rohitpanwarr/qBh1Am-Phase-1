import React from 'react';

class SiteContent extends React.Component {
  render() {
    return (
      <div style={{"position": "absolute", "top": "100px", "bottom": "100px", "border": "1px solid black"}}>
        <p> Site content component </p>
      </div>
    );
  };
}

export default SiteContent;
