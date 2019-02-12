import React from 'react';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Swiper from 'react-id-swiper';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items:[],
            tabIndex: 0
        }
    }
    render(){
      const params = {
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };
        return(
          <div>
          <div>
            <Swiper {...params}>
              <div>
                <img src="/images/m1.jpg"/>
              </div>
              <div>
                <img src="/images/m2.jpg"/>
              </div>
              <div>
                <img src="/images/m3.jpg"/>
              </div>
            </Swiper>
          </div>
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                      <Tab>Title 1</Tab>
                      <Tab>Title 2</Tab>
                    </TabList>
                    <TabPanel>
                      <div>
                        aaaaaaaaaaaaaaaa
                      </div>
                      <div>
                        <img src="/images/m3.jpg"/>
                      </div>
                    </TabPanel>
                    <TabPanel>2222222222222222</TabPanel>
                  </Tabs>
          </div>
        );
    }
}
export default Products;
