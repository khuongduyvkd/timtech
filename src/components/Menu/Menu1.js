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
  fetch('/getmenu)
  .then(res => res.json())
  .then(data => this.setState({items: data}))
  }
    render() {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light top-header mb-2">
        <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-mega mx-auto">
            <li className="nav-item">
              <Link className="nav-link ml-lg-0" to="/trang-chu">Trang chủ</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false" to={{ pathname: '/san-pham/may-chu-dell', state: { ma_nhom: 'MAY_CHU_DELL'} }}>
                Máy Server
              </Link>
              <ul className="dropdown-menu mega-menu ">
                <li>
                  <div className="row">
                    <div className="col-md-4 media-list span4 text-left">
                      <h5 className="tittle-w3layouts-sub" > Máy Server </h5>
                      <ul>
                        <li className="media-mini mt-3">
                          <a >Dell Server</a>
                        </li>
                        <li className="media-mini mt-3">
                          <a >HP Server</a>
                        </li>
                        <li className="media-mini mt-3">
                          <a >IBM Server</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr/>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link ml-lg-0"  to={{ pathname: '/san-pham/thiet-bi-luu-dien', state: { ma_nhom: 'THIET_BI_LUU_DIEN'} }} >Thiết bị lưu điện</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ml-lg-0" to={{ pathname: '/san-pham/phu-kien-may-tinh', state: { ma_nhom: 'PHU_KIEN_MAY_TINH'} }}>Phụ kiện máy tính</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={{ pathname: '/thong-tin', state: { ma_nhom: 'THONG-TIN'} }}>Thông tin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={{ pathname: '/lien-he', state: { ma_nhom: 'LIEN_HE'} }}>Liên hệ tư vấn</Link>
            </li>
          </ul>

        </div>
      </nav>
    </div>
    );
  }
}
export default Menu;
