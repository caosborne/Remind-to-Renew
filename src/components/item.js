import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 className="item">{this.props.itemName}</h3>
        <h5 className="renewal-date">{this.props.renewalDate}</h5>
        <h5 className="alert-date">{this.props.alertDate}</h5>
      </div>
    );
  }
}

export default Item;
