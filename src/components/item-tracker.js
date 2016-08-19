import React from 'react';
import Item from './item';
import _ from 'underscore';

class ItemTracker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="tracker" className="panel panel-primary col-md-5">
        <div className="panel-heading">
          <h2 className="panel-title text-warning">Renewable Items</h2>
        </div>
        <div className="panel-body">
          { this.props.certs.map( (cert, id) => <Item key={id} itemName={cert.itemName} cert={cert.cert} issueDate={cert.issueDate} renewalDate={cert.renewalDate} alertDate={cert.alertDate} renewalUrl={cert.renewalUrl} location={cert.location} docsNeeded={cert.docsNeeded} id={id} />) }
        </div>
      </div>
    );
  }
}

export default ItemTracker;
