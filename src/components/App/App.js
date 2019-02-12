import React from 'react';
import Header from '../Header/Header'
import Menu from '../Menu/Menu2'
import RouterURL from '../RouterURL/RouterURL'
import {BrowserRouter as Router} from 'react-router-dom';
class App extends React.Component {
      render() {
        return (
                <Router>
                  <div>
                    <Header/>
                    <Menu/>
                    <RouterURL/>
                  </div>
                </Router>
            );
  }
}

export default App;
