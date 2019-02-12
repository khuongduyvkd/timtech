import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          items:[]
      }
  }
  async componentDidMount(){
    try {
        this.getList();
      } catch (error) {
        console.log(error);
      }
  }
  getList(){
  fetch('/getmenu')
  .then(res => res.json())
  .then(data => this.setState({items: data}))
  }
    render() {
    return (
    <div className="menu">
        <label for="show-menu" className="show-menu">Show Menu</label>
        <input type="checkbox" id="show-menu" role="button"/>
        <ul id="menu">
        {this.state.items.map(function(itms,i){
          return (
            <li>
                  <Link to={{ pathname: itms.LINK}}>{itms.TEN_MENU}</Link>
              <ul class="hidden">
              {
                itms.submenu.map(function(itm,i){
                  return (
                    <Link to={{ pathname: itm.LINK}}>{itm.TEN_MENU}</Link>
                  );
                })
              }
              </ul>
            </li>
          );
        }
        )}
        </ul>
    </div>
    );
  }
}
export default Menu;
