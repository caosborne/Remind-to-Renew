import React from 'react';
import ItemForm from './item-form';
import Profile from './profile';
import ItemTracker from './item-tracker';

/////////////////////////////////////////////////////////////////////////////////
/// THIS IS FOR SETTING AN EMAIL TO ADDRESS SO I CAN SEND AN EMAIL AS AN ALERT///
////////////////////////////////////////////////////////////////////////////////
// That's done using a dynamic variable - just put something like "{{to}}" in the "to email" field, and then pass the value of "to" via the emailjs.send() command (the third parameter is the object with values of the dynamic variables)


class ItemContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { certs: [] };
  }

  componentDidMount(){
    $.ajax({
      url: '/items',
      method: "GET",
      dataType: "json"
    })
    .done(function(data){
      console.log(data)
      this.setState({certs: data});
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
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
    $.ajax({
      url: '/certs',
      method: 'POST',
      data: newCert
    }).done(function (data) {
      let certs = this.state.certs;
      certs.push(data);
      this.setState({
        certs: certs
      })
    }.bind(this));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Profile />
        </div>
        {/* <div className="row"> */}
          <ItemTracker certs={this.state.certs} />
          <ItemForm addCert={this._addCert.bind(this)} />
        {/* </div> */}
      </div>
    );
  }
}

export default ItemContainer;
