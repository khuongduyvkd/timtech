import React from 'react';

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
        return(
          <div>
          {
            this.state.items.map(function(item,i){
                return (
                          <div className="sanphamnoibat"> {item.ten_nhom}
                              <label className="gachduoi"></label>
                                {
                                  item.productList.map(function(itm,id){
                                    return(
                                               <div className="men-pro-item">
                                                 <div className="men-thumb-item">
                                                   <img src={"/images/"+itm.img} className="img-fluid" alt=""/>
                                                   <div className="men-cart-pro">
                                                     <div className="inner-men-cart-pro">
                                                       <a className="link-product-add-cart" >Chi tiết</a>
                                                     </div>
                                                   </div>
                                                <div>
                                                {(() => {
                                                  if (itm.new) {
                                                    return (
                                                      <span className="product-new-top">New</span>
                                                    )
                                                  }
                                                })()}
                                              </div>
                                                 </div>
                                                 <div className="item-info-product">
                                                   <div className="info-product-price">
                                                     <div className="grid_meta">
                                                       <div className="product_price">
                                                         <h4>
                                                           <a onClick={()=>that.handleClick(itm)}>{itm.name}</a>
                                                         </h4>
                                                         <div className="grid-price mt-2">
                                                           <span className="money ">{itm.price}</span>
                                                         </div>
                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div className="clearfix"></div>
                                                 </div>
                                               </div>
                                          );
                                        })
                                      }
                          </div>
                      );
                  })
              }
          </div>
        );
    }
}
export default Home;
