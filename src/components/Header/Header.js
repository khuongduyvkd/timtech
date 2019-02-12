import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="banner-top container-fluid">
    		<header>
        <div className="row">
          <div className="col-md-3 top-info text-left mt-lg-4">
            <h6>Tư vấn</h6>
            <ul>
              <li>
                <i className="fas fa-phone"></i> Gọi</li>
              <li className="number-phone mt-3">
                <a href="tel:+84949519324"> +84 94 9518 324</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 logo-w3layouts text-center">
  					<h1 className="logo-w3layouts">
  						<a className="logo" href="index.html">
  							TIMTECH </a>
  					</h1>
				  </div>
        </div>
        <label className="top-log mx-auto"></label>
    		</header>
      </div>
    );
  }
}
export default Header;
