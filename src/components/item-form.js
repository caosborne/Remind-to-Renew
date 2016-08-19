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

      this.refs.newItemName.value = '';
      this.refs.newCert.value = '';
      this.refs.newIssueDate.value = '';
      this.refs.newRenewalDate.value = '';
      this.refs.newAlertDate.value = '';
      this.refs.newRenewalUrl.value = '';
      this.refs.newLocation.value = '';
      this.refs.newDocsNeeded.value = '';
    }
    else {
      alert("You need to at least have a Name, Renewal Date, & Alert Date to add to your tracker.")
    }
  }

  render() {
    return (
      // <div>
      //   <div className="panel panel-default">
      //     <div className="panel-heading">
      //       <h3 className="panel-title">Cert/License/ID/ or anything that needs to be renewed.</h3>
      //     </div>
      //     <div className="panel-body newTaskInput">
      //       <form onSubmit={this._handleSubmit.bind(this)} >
      //         <div className="containter">
      //           <div className="row">
      //             <label>Item Name: </label>
      //               <input ref="newItemName" type="text" placeholder="Item Name"/>
      //             <label>ID/Cert #: </label>
      //               <input id="searchTextField" ref="newCert" type="text" placeholder="ID/Cert #"/>
      //           </div>
      //           <div className="row">
      //              <label>Issue Date: </label>
      //               <input id="datepicker" ref="newIssueDate" type="text" placeholder="Issue Date"/>
      //              <label>Renewal Date: </label>
      //                <input id="datepicker2" ref="newRenewalDate" type="text" placeholder="Renewal Date"/>
      //              <label>Alert Date: </label>
      //                <input id="datepicker3" ref="newAlertDate" type="text" placeholder="Alert Date"/>
      //            </div>
      //            <div className="row">
      //              <label>Renewal URL: </label>
      //                <input id="searchTextField" ref="newRenewalUrl" type="text" placeholder="Renewal URL"/>
      //              <label>Location to Renew: </label>
      //                <input id="searchTextField" ref="newLocation" type="text" placeholder="Location"/>
      //            </div>
      //            <div className="row">
      //              <label>Docs Needed for Renewal: </label>
      //                <input id="searchTextField" ref="newDocsNeeded" type="text" placeholder="DOCS Needed"/>
      //            </div>
      //            <input className="button" type="submit" value="Add to Tracker"/>
      //          </div>
      //        </form>
      //      </div>
      //    </div>
      //  </div>

      <div className="panel panel-primary col-md-offset-6">
        <div className="panel-heading">
          <h2 className="panel-title text-warning">Cert/License/ID</h2>
        </div>
        <div className="panel-body">
        <form className="" onSubmit={this._handleSubmit.bind(this)} >
          {/* <fieldset> */}
            {/* <legend>Cert/License/ID/ or anything that needs to be renewed.</legend> */}
            <div className="">
              <label for="inputItem" className="col-lg-2 control-label text-warning">Item Name</label>
              <div className="col-lg-10">
                <input ref="newItemName" type="text" className="form-control" id="inputItem" placeholder="Item Name" />
              </div>
            </div>
            <div className="">
              <label for="inputCert" className="col-lg-2 control-label text-warning">ID/Cert #</label>
              <div className="col-lg-10">
                <input ref="newCert" type="text" className="form-control" id="searchTextField" placeholder="ID/Cert #" />
              </div>
            </div>
            <div className="">
              <label for="inputCert" className="col-lg-2 control-label text-warning">Issue Date</label>
              <div className="col-lg-10">
                <input ref="newIssueDate" type="text" className="form-control" id="datepicker" placeholder="Issue Date" />
              </div>
            </div>
            <div className="">
              <label for="inputCert" className="col-lg-2 control-label text-warning">Renewal Date</label>
              <div className="col-lg-10">
                <input ref="newRenewalDate" type="text" className="form-control" id="datepicker2" placeholder="Renewal Date" />
              </div>
            </div>
            <div className="">
              <label for="inputCert" className="col-lg-2 control-label text-warning">Alert Date</label>
              <div className="col-lg-10">
                <input ref="newAlertDate" type="text" className="form-control" id="datepicker3" placeholder="Alert Date" />
              </div>
            </div>
            <div className="">
              <label for="inputCert" className="col-lg-2 control-label text-warning">Renewal URL</label>
              <div className="col-lg-10">
                <input ref="newRenewalUrl" type="text" className="form-control" id="" placeholder="Renewal URL" />
              </div>
            </div>
            <div className="">
              <label for="inputCert" className="col-lg-2 control-label text-warning">Location to Renew</label>
              <div className="col-lg-10">
                <input ref="newLocation" type="text" className="form-control" id="" placeholder="Location" />
              </div>
            </div>
            <div className="">
              <label for="inputCert" className="col-lg-2 control-label text-warning">Docs Needed</label>
              <div className="col-lg-10">
                <input ref="newDocsNeeded" type="text" className="form-control" id="searchTextField" placeholder="DOCS Needed" />
              </div>
            </div>


            <div className="">
              <div className="col-lg-10 col-lg-offset-2">
                <input className="button btn btn-primary text-warning tracker-button" type="submit" value="Add to Tracker"/>
              </div>
            </div>
          {/* </fieldset> */}
        </form>

        </div>
      </div>




     );
   }
 }

export default ItemForm;
