import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import GroupIcon from './GroupIcon';
import axios from 'axios';
// 1/ npm install localforage --save and then import it
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
        console.log(contactGroup)
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
//    In addition go getting users, we want to check if
// 1/ there is a group in our browser's offline memory
    this.updateGroupFromBrowserMemory()
  }

  handleSelectContact(contact) {
    this.setState({
      selectedContact: contact
    })
  }

  handleGroupListInclusion(contact) {
    // 1/ before toggling group, make sure
    // it is synched with browser memory
      localforage.getItem('contactGroup')
        .then(group => {
          const inGroup = group.filter(c => c.id.value === contact.id.value);
// 4/ if contact IS in array, filter it out of state
          if(inGroup.length) {
            this.setState({
              group: group.filter(c => c.id.value !== contact.id.value)
            }, () => {
// 1/ in callback, set browser memory to array without contact
              localforage.setItem('contactGroup', this.state.group)
            })

// 5/ if contact IS NOT in group array, then add it
          } else {
            localforage.setItem('contactGroup', )
            this.setState({
              group: [contact, ...this.state.group]
            }, () => {
// 1/ add new, larger array to browser memory
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
