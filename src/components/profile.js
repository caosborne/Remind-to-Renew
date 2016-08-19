import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    // this.state = { user: [] };
  }

  // componentDidMount(){
  //   $.ajax({
  //     url: '/callback',
  //     method: "GET",
  //     dataType: "json"
  //   })
  //   .done(function(data){
  //     console.log(data)
  //     this.setState({user: data});
  //   }.bind(this))
  //   .fail(function(error){
  //     console.log(error);
  //   })
  // }

  render() {
    return (

      <div className="panel panel-primary col-md-12">
        <div className="panel-heading">
          <h1 className="panel-title text-warning">Remind 2 Renew</h1>
        </div>
        <div className="panel-body profile">
          <img src={this.props.picture}></img>
          <h3 className="text-warning">Hello, {this.props.givenName}</h3>
          <p className="text-warning">You currently have {this.props.NumberOfCertsAlertedToBeRenewed}<span className="text-success">0</span> items that need to be renewed!</p>
        </div>
      </div>
    );
  }
}

export default Profile;
