import React, { Component } from 'react';
import ContactList from './ContactList';
import localforage from 'localforage';
import { Link } from 'react-router';

class GroupView extends Component {
  constructor() {
    super();
    this.state = {
      group: []
    }
  }
  componentDidMount() {
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
    return (
      <div className="container group-page">
        <div className="back-btn">
          <Link to="/">
            <i className="fa fa-arrow-circle-o-left"></i>
          </Link>
        </div>
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
