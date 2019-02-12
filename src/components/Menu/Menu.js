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
      console.log(this.state.items);
    return (
    <div>
      {
        this.state.items.map(function(itms,i){
          return (
            <div >
              <nav >
                <div>
                    <ul>
                        <li>
                            <Link to={{ pathname: itms.LINK, state: { ma_nhom: itms.MA_NHOM} }}>{itms.TEN_MENU}</Link>
                            <div>
                                {
                                  itms.submenu.map(function(itm,i){
                                      return (
                                        <ul>
                                          <li>
                                              <Link to={{ pathname: itm.LINK, state: { ma_nhom: itm.MA_NHOM} }}>{itm.TEN_MENU}</Link>
                                          </li>
                                        </ul>
                                      );
                                  })
                                }
                          </div>
                        </li>
                    </ul>
                </div>
              </nav>
            </div>
          )
        })
      }
    </div>
    );
  }
}
export default Menu;
