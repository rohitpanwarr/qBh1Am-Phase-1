import React from 'react';

class SiteHeader extends React.Component {
  render() {
    return (
      <div style={{"position": "absolute", "top": "0", "border": "1px solid black", "height": "100px"}}>
        <p> Site header component </p>
      </div>
    );
  };
}

export default SiteHeader;
