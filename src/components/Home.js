import React, { Component } from 'react';

class Home extends Component {
  render() {
    var names = ['Jake', 'Jon', 'Thruster'];
    var namesList = names.map(function(name){
                    return <li>{name}</li>;
                  })

    return  <ul>{ namesList }</ul>

  
  }
}

export default Home;
