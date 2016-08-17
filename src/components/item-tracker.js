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

            { this.props.certs.map( (cert, id) => <Item key={id} itemName={cert.itemName} cert={cert.cert} issueDate={cert.issueDate} renewalDate={cert.renewalDate} alertDate={cert.alertDate} renewalUrl={cert.renewalUrl} location={cert.location} docsNeeded={cert.docsNeeded} id={id} />) }

          </div>
        </div>
      </div>
    );
  }
}

export default ItemTracker;
