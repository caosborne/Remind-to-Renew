import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="container">
      //   <div className="row">
      //     <h3 className="item">{this.props.itemName}</h3>
      //     <h4 className="cert">{this.props.cert}</h4>
      //   </div>
      //   <div className="row">
      //     <h5 className="issue-date">Issue Date: {this.props.issueDate} Renewal Date: {this.props.renewalDate} Alert Date: {this.props.alertDate}</h5>
      //     {/* <h5 className="renewal-date">{this.props.renewalDate}</h5>
      //     <h5 className="alert-date">{this.props.alertDate}</h5> */}
      //   </div>
      //   <div className="row">
      //     <h5 className="renewal-url">Renewal URL: {this.props.renewalUrl} Location: {this.props.location}</h5>
      //     {/* <h5 className="location">{this.props.location}</h5> */}
      //   </div>
      //   <h5 className="docs-needed">{this.props.docsNeeded}</h5>
      // </div>
      <div id="item-panel" className="panel panel-success">
        <div className="panel-heading">
          <h2 className="panel-title">{this.props.itemName} - {this.props.cert}</h2>
        </div>
        <div className="panel-body">
          <h5 className="issue-date">Issue Date: {this.props.issueDate} || Renewal Date: {this.props.renewalDate} || Alert Date: {this.props.alertDate}</h5>
          <h5 className="renewal-url">Renewal URL: {this.props.renewalUrl} || Location: {this.props.location}</h5>
          <h5 className="docs-needed">{this.props.docsNeeded}</h5>
        </div>
      </div>
    );
  }
}

export default Item;
