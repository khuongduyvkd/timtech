import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../Home/Home2'
import Products from '../Products/Products1'
import Productdetail from '../Productdetail/Productdetail'
import About from '../About/About'
import Contact from '../Contact/Contact'
class RouterURL extends React.Component {
    render() {
    return (
        <div>
          <Switch>
            <Route path="/san-pham/:ma_nhom" component={Products}/>
            <Route path="/san-pham-chi-tiet/:id" component={Productdetail}/>
            <Route path="/trang-chu" component={Home}/>
            <Route path="/thong-tin" component={About}/>
            <Route path="/lien-he" component={Contact}/>
            <Route component={Home}/>
          </Switch>
        </div>
    );
  }
}

export default RouterURL;
