import React from 'react';
import Item from './item';


class ItemTracker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default col-md-5 tl-panel">
          <div className="panel-heading">
            <h3 className="panel-title">Renewable Items</h3>
          </div>
          <div className="panel-body">
            <Item />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemTracker;
