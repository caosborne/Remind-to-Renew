import React from 'react';

class ItemForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Cert/License/ID/ or anything that needs to be renewed.</h3>
          </div>
          <div className="panel-body newTaskInput">
            <form  >
              <div className="containter">
                <div className="row">
                  <label>Item Name:</label>
                    <input ref="newTask" type="text" placeholder="Item Name"/>
                  <label>ID/Cert #:</label>
                    <input id="searchTextField" ref="newLocation" type="text" placeholder="ID/Cert #"/>
                </div>
                <div className="row">
                  <label>Issue Date:</label>
                    <input id="searchTextField" ref="newLocation" type="text" placeholder="Issue Date"/>
                  <label>Renewal Date:</label>
                    <input id="searchTextField" ref="newLocation" type="text" placeholder="Renewal Date"/>
                  <label>Alert Date:</label>
                    <input id="searchTextField" ref="newLocation" type="text" placeholder="Alert Date"/>
                </div>
                <div className="row">
                  <label>Renewal URL:</label>
                    <input id="searchTextField" ref="newLocation" type="text" placeholder="Renewal URL"/>
                  <label>Location to Renew:</label>
                    <input id="searchTextField" ref="newLocation" type="text" placeholder="Location"/>
                </div>
                <div className="row">
                  <label>Docs Needed for Renewal:</label>
                    <input id="searchTextField" ref="newLocation" type="text" placeholder="DOCS Needed"/>
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
