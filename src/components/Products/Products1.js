import React from 'react';
import {Link} from 'react-router-dom';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items:[],
            loading: true
        }
    }
    async componentDidMount(){
      try {
          this.getList(this.props.match.params.ma_nhom);
        } catch (error) {
          console.log(error);
        }
    }
    async componentDidUpdate(){
      try {
        this.getList(this.props.match.params.ma_nhom);
      } catch (error) {
        console.log(error);
      }
    }
    getList = (ma_nhom) => {
    fetch('/getnhomsanphamtheoid/'+ma_nhom,{method: "POST",})
    .then(res => res.json())
    .then(data => this.setState({items: data}))
    }
    render(){
        var that=this;
        return(
        <div>
        <section class="bgwhite p-t-55 p-b-65">
          <div >
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-2 p-b-50">
                <div class="leftbar p-r-20 p-r-0-sm">
                  <h4 class="m-text14 p-b-7">
                    Categories
                  </h4>

                  <ul class="p-b-54">
                    <li class="p-t-4">
                      <a href="#" class="s-text13 active1">
                        All
                      </a>
                    </li>

                    <li class="p-t-4">
                      <a href="#" class="s-text13">
                        Women
                      </a>
                    </li>

                    <li class="p-t-4">
                      <a href="#" class="s-text13">
                        Men
                      </a>
                    </li>

                    <li class="p-t-4">
                      <a href="#" class="s-text13">
                        Kids
                      </a>
                    </li>

                    <li class="p-t-4">
                      <a href="#" class="s-text13">
                        Accesories
                      </a>
                    </li>
                  </ul>
                  <h4 class="m-text14 p-b-32">
                    Filters
                  </h4>

                  <div class="filter-price p-t-22 p-b-50 bo3">
                    <div class="m-text15 p-b-17">
                      Price
                    </div>

                    <div class="wra-filter-bar">
                      <div id="filter-bar" class="noUi-target noUi-ltr noUi-horizontal">
                      <div class="noUi-base"><div class="noUi-origin" ><
                      div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="0.0" aria-valuetext="50.00" ></div></div><div class="noUi-connect" ></div><div class="noUi-origin" ><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="100.0" aria-valuetext="200.00" ></div></div></div></div>
                    </div>

                    <div class="flex-sb-m flex-w p-t-16">
                      <div class="w-size11">
                        <button class="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
                          Filter
                        </button>
                      </div>

                      <div class="s-text3 p-t-10 p-b-10">
                        Range: $<span id="value-lower">50</span> - $<span id="value-upper">200</span>
                      </div>
                    </div>
                  </div>
                  <div class="search-product pos-relative bo4 of-hidden">
                    <input class="s-text7 size6 p-l-23 p-r-50" type="text"
                    name="search-product" placeholder="Search Products..."/>

                    <button class="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                      <i class="fs-12 fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-8 col-lg-10 p-b-50">
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
                                                        <Link to={{ pathname: '/san-pham-chi-tiet/'+item._id}} class="link-product-add-cart">Chi tiết</Link>
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
              </div>
            </div>
          </div>
        </section>
        </div>
        );
      }
}
export default Products;
