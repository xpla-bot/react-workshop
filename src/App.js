import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <p className="title">Limitations:</p>
        <ul>
          <li>Although React components can manage state (i.e. data), it’s tools are limited. <b>Redux</b> is the most well-known <b>state management library</b> for React, it’s practically the default choice, but there are other well-supported libraries, too.</li>
          <li>
            React comes with neither a router nor AJAX capabilities. It’s focus is solely on rendering an interface quickly and efficiently. The default libraries for these are:
            <ul>
              <li><b>Router:</b> React Router</li>
              <li><b>AJAX:</b> fetch polyfill, or Axios.</li>
            </ul>
          </li>
          <li>No built-in <b>form creation and validation</b> tools</li>
          <li>No enforced <b>conventions</b> for app structure</li>
        </ul>
        <p className="note">Although the above are noted as <em>limitations</em>, they can also be thought of as providing <em>freedom</em> to choose your own solutions.</p>
      </div>
    );
  }
}

export default App;
