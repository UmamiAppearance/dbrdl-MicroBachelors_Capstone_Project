import './bootstrap.min.css';
import React from 'react';

class Location extends React.Component {
  render() {
    return (
      <div>

        <h1 class="h1 text-center">
          Location
        </h1>

        <div class="d-flex flex-column flex-lg-row justify-content-around" style={{padding: "50px"}}>
        
          <img src='/location.jpeg' class="m-auto" style={{width: "300px"}}/>
          <div style={{margin:"100px 40px"}}>
              <span style={{margin:"60px"}}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </span >
          </div>

        </div>
        
      </div>
    );
  }
}

export default Location;
