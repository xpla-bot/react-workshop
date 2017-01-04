import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className="container">
        <p>Now we need to break up the Contact component into sub-components.</p>
        <p>This will allow us to reuse the sub-components throughout our app.</p>
        <p>For example, the <b>avatar</b> and <b>contact details</b> could be made into sub-components. They could then be reused on a full screen Contact page that has notes and other features.</p>
        <p>If we need to adjust the component’s style when it's used in a different context, we can do so in our CSS without changing the component’s code.</p>
      </div>
    );
  }
}

export default Contact;
