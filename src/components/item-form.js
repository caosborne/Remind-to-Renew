import React from 'react';

class ItemForm extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleSubmit(event){
    event.preventDefault();
    // console.log(this.refs.newItemName.value);

    let newItemName = this.refs.newItemName.value;
    let newCert = this.refs.newCert.value;
    let newIssueDate = this.refs.newIssueDate.value;
    let newRenewalDate = this.refs.newRenewalDate.value;
    let newAlertDate = this.refs.newAlertDate.value;
    let newRenewalUrl = this.refs.newRenewalUrl.value;
    let newLocation = this.refs.newLocation.value;
    let newDocsNeeded = this.refs.newDocsNeeded.value;

    // console.log(newItemName, newCert, newIssueDate, newRenewalDate, newAlertDate, newRenewalUrl, newLocation, newDocsNeeded);


    if (newItemName && newRenewalDate && newAlertDate) {
      this.props.addCert(newItemName, newCert, newIssueDate, newRenewalDate, newAlertDate, newRenewalUrl, newLocation, newDocsNeeded);

      // this.props.addTask(newTask, newLocation, newLatLng);
      // this.setState({
      //   latLng: null
      // });


      this.refs.newItemName.value = '';
      this.refs.newRenewalDate.value = '';
      this.refs.newAlertDate.value = '';
    }
    else {
      alert("You need to at least have a Name, Renewal Date, & Alert Date to add to your tracker.")
    }
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Cert/License/ID/ or anything that needs to be renewed.</h3>
          </div>
          <div className="panel-body newTaskInput">
            <form onSubmit={this._handleSubmit.bind(this)} >
              <div className="containter">
                <div className="row">
                  <label>Item Name: </label>
                    <input ref="newItemName" type="text" placeholder="Item Name"/>
                  <label>ID/Cert #: </label>
                    <input id="searchTextField" ref="newCert" type="text" placeholder="ID/Cert #"/>
                </div>
                {/* <div className="row"> */}
                <div class="container">
                    <div class="row">
                        <div class='col-sm-6'>
                            <div class="form-group">
                                <div class='input-group date' id='datetimepicker1'>
                                    <label>Issue Date: </label>
                                    <input type='text' class="form-control" ref="newIssueDate" />
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                                <div class='input-group date' id='datetimepicker1'>
                                    <label>Renewal Date: </label>
                                    <input type='text' class="form-control" ref="newRenewalDate" />
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                                <div class='input-group date' id='datetimepicker1'>
                                    <label>Alert Date: </label>
                                    <input type='text' class="form-control" ref="newAlertDate" />
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  {/* <label>Issue Date: </label>
                    <input id="datepicker" ref="newIssueDate" type="text" placeholder="Issue Date"/>
                  <label>Renewal Date: </label>
                    <input id="datepicker2" ref="newRenewalDate" type="text" placeholder="Renewal Date"/>
                  <label>Alert Date: </label>
                    <input id="datepicker3" ref="newAlertDate" type="text" placeholder="Alert Date"/> */}
                {/* </div> */}
                <div className="row">
                  <label>Renewal URL: </label>
                    <input id="searchTextField" ref="newRenewalUrl" type="text" placeholder="Renewal URL"/>
                  <label>Location to Renew: </label>
                    <input id="searchTextField" ref="newLocation" type="text" placeholder="Location"/>
                </div>
                <div className="row">
                  <label>Docs Needed for Renewal: </label>
                    <input id="searchTextField" ref="newDocsNeeded" type="text" placeholder="DOCS Needed"/>
                </div>
                <input className="button" type="submit" value="Add to Tracker"/>




              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemForm;
