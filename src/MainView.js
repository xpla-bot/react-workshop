import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import GroupIcon from './GroupIcon';
import axios from 'axios';
import localforage from 'localforage';

class MainView extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      selectedContact: null,
      group: []
    }
    this.handleSelectContact = this.handleSelectContact.bind(this);
    this.handleGroupListInclusion = this.handleGroupListInclusion.bind(this);
  }

  updateGroupFromBrowserMemory() {
    return localforage.getItem('contactGroup')
      .then(contactGroup => {
        if(contactGroup.length) {
          this.setState({
            group: contactGroup
          })
        } else {
          this.setState({
            group: []
          })
        }
      })
  }

  componentDidMount() {
    axios.get('./users.json')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
    this.updateGroupFromBrowserMemory()
  }

  handleSelectContact(contact) {
    this.setState({
      selectedContact: contact
    })
  }

  handleGroupListInclusion(contact) {
      localforage.getItem('contactGroup')
        .then(group => {
          const inGroup = group.filter(c => c.id.value === contact.id.value);
          if(inGroup.length) {
            this.setState({
              group: group.filter(c => c.id.value !== contact.id.value)
            }, () => {
              localforage.setItem('contactGroup', this.state.group)
            })

          } else {
            this.setState({
              group: [contact, ...this.state.group]
            }, () => {
              localforage.setItem('contactGroup', this.state.group);
            })
          }
        })
  }

  renderContactList() {
    if (this.state.users.length) {
      return <ContactList
                button={true}
                toggleGroupInclusion={this.handleGroupListInclusion}
                selectContact={this.handleSelectContact}
                contacts={this.state.users} />;
    } else {
      return <h1 className="loading">Loading data...</h1>;
    }
  }

  renderContactDetails() {
    if (this.state.selectedContact) {
      return <ContactDetails
                contact={this.state.selectedContact} />;
    } else {
      return <h1 className="loading">Select a contact</h1>;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <GroupIcon group={this.state.group} />
        <div className="row">
          <div className="col-sm-6">
            {this.renderContactList()}
          </div>
          <div className="col-sm-6">
            {this.renderContactDetails()}
          </div>
        </div>
      </div>
    )
  }
}

export default MainView;
