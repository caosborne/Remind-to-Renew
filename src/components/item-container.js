import React from 'react';
import ItemForm from './item-form';
import Profile from './profile';
import ItemTracker from './item-tracker';


class ItemContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { certs: [] };
  }

  _addCert(itemName, cert, issueDate, renewalDate, alertDate, renewalUrl, location, docsNeeded){
    let newCert = {
      itemName: itemName,
      cert: cert,
      issueDate: issueDate,
      renewalDate: renewalDate,
      alertDate: alertDate,
      renewalUrl: renewalUrl,
      location: location,
      docsNeeded: docsNeeded
    }
    // this.setState({
    //   newItemName: newItemName,
    //   newCert: newCert,
    //   newIssueDate: newIssueDate,
    //   newRenewalDate: newRenewalDate,
    //   newAlertDate: newAlertDate,
    //   newRenewalUrl: newRenewalUrl,
    //   newLocation: newLocation,
    //   newDocsNeeded: newDocsNeeded
    // });
    let certs = this.state.certs;
    certs.push(newCert);
    this.setState({
      certs: certs
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Profile />
        <ItemForm addCert={this._addCert.bind(this)} />
        <ItemTracker certs={this.state.certs} />
      </div>
    );
  }
}

export default ItemContainer;
