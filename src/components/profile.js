import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = { user: [] };
  }

  componentDidMount(){
    $.ajax({
      url: '/callback',
      method: "GET",
      dataType: "json"
    })
    .done(function(data){
      console.log(data)
      this.setState({user: data});
    }.bind(this))
    .fail(function(error){
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body newTaskInput">
            <img src={this.props.picture}></img>
            <h3>Welcome back, {this.props.givenName}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
