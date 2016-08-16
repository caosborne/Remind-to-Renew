import React from 'react';
import Item from './item';
import _ from 'underscore';

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
            {/* <Item itemName={cert.itemName} renewalDate={cert.renewalDate} alertDate={cert.alertDate} /> */}

            { this.props.certs.map( (cert, id) => <Item key={id} itemName={cert.itemName} renewalDate={cert.renewalDate} alertDate={cert.alertDate} location={cert.location} id={id} />) }

            {/* newRenewalDate.value = '';
            this.refs.newAlertDate.value */}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemTracker;
