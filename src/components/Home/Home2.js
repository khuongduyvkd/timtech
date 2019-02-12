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
        return(
        <div>
            <section class="banner-bottom-wthreelayouts py-lg-5 py-3">
                {
                  this.state.items.map(function(items,i)
                    {
                    return (
                              <div class="container-fluid">
                                <div class="inner-sec-shop px-lg-4 px-3">
                                  <h3 class="tittle-w3layouts my-lg-4 my-4">{items.ten_nhom} </h3>
                                  <div class="row">
                                  {
                                    items.productList.map(function(item,i){
                                      return (
                                        <div class="col-md-3 product-men women_two">
                                          <div class="product-googles-info googles">
                                            <div class="men-pro-item">
                                              <div class="men-thumb-item">
                                                <img src={"/images/"+item.img} class="img-fluid" alt=""/>
                                                <div class="men-cart-pro">
                                                  <div class="inner-men-cart-pro">
                                                    <a href="single.html" class="link-product-add-cart">Chi tiết</a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="item-info-product">
                                                <div class="info-product-price">
                                                  <div class="grid_meta">
                                                    <div class="product_price">
                                                      <h4>
                                                        <a href="single.html">{item.name}</a>
                                                      </h4>
                                                      <div class="grid-price mt-2">
                                                        <span class="money ">{item.price}</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="clearfix"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )
                                  }
                                  </div>
                              </div>
                              </div>
                            );
                    }
                  )
                }
            </section>
        </div>
        );
      }
}
export default Home;
