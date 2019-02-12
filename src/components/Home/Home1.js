import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items:[]
        }
    }
    componentDidMount(){
      this.getList();
    }
    getList = () => {
    fetch('/getnhomsanpham')
    .then(res => res.json())
    .then(data => this.setState({items: data}))
    }
    render(){
        var that=this;
        console.log(this.state.items);
        return(
          <div className="listsanpham">
              {
              this.state.items.map(function(item,i){
                  return (
                          <ul >
                            <h1><Link to={{ pathname: item.LINK, state: { ma_nhom: item.MA_NHOM} }}>{item.ten_nhom}</Link></h1>
                            {
                              item.productList.map(function(items,i){
                                return (
                                  <li>
                                    <img src={"/images/"+items.img}></img>
                                  </li>
                                );})
                            }
                          </ul>
                        );
                      }
                    )
              }
          </div>
        );
      }
}
export default Home;
