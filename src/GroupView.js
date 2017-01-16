import React, { Component } from 'react';
import ContactList from './ContactList';
// 1/ npm install localforage --save and then import it
import localforage from 'localforage';

class GroupView extends Component {
  constructor() {
    super();
    this.state = {
      group: []
    }
  }
  componentDidMount() {
// Grab group from offline browser memeory
    localforage.getItem('contactGroup')
      .then(contactGroup => {
        if(contactGroup) {
          this.setState({
            group: contactGroup
          })
        }
      })
  }
  render() {
// 7/ Reuse ContactList. Added prop for show/hide button
    return (
      <div>
        {this.state.group.length
          ? <ContactList
              button={false}
              contacts={this.state.group}/>
          : <h1>No contacts in group</h1>}
      </div>
    );
  }
}

export default GroupView;
