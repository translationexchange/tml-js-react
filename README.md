# tml-js-react

Simple wrapper around TML (Translation Markup Language) for React

## Install
```bash
npm install 'tml-js-react';
```
    
## Usage

```jsx
import React from 'react';
import {tr, trl} from 'tml-js-react';

class YourComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{ tr('Welcome {username}', {username: 'Jane'}) }</h1>
        <input placeholder={ trl('Enter your email') } />
        <button>{ tr('Get Started') }</button>
      </div>
    );
  }
}

export default YourComponent;
```

