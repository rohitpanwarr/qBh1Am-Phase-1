import React from 'react';

class SiteFooter extends React.Component {
  render() {
    return (
      <div style={{"position": "absolute", "bottom": "0", "border": "1px solid black", "height": "100px"}}>
        <p> Site footer component </p>
      </div>
    );
  };
}

export default SiteFooter;
