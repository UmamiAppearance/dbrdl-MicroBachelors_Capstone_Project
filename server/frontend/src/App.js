import './bootstrap.min.css';
import React from 'react';
import HomePage from './homepage.js';
import AboutUs from './aboutus.js';
import Dealers from './dealers.js';
import Location from './location.js';
import ContactUs from './contactus.js';


window.watsonAssistantChatOptions = {
    integrationID: "1f473045-8ed4-45b1-8400-55b08841c398", // The ID of this integration.
    region: "eu-gb", // The region your integration is hosted in.
    serviceInstanceID: "c6582479-c9e4-4659-960c-e9c5a7bd68f0", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
  document.head.appendChild(t);
});



const year = new Date().getFullYear();


class App extends React.Component {

  state = {
    pageshown:<HomePage/>
  }

  setPageHome = ()=> {
    this.setState({pageshown:<HomePage/>});    
  }

  setPageAboutUs = ()=> {
    this.setState({pageshown:<AboutUs/>});    
  }

  setPageDealers = ()=> {
    this.setState({pageshown:<Dealers/>});    
  }
  
  setPageLocation = ()=> {
    this.setState({pageshown:<Location/>});    
  }

  setPageContactUs = ()=> {
    this.setState({pageshown:<ContactUs/>});    
  }

  
  render() {
    return (
      <div id="page">
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          
          <a class="navbar-brand" href="#" onClick={this.setPageHome}>Home <span class="sr-only">(current)</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageAboutUs}>About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageDealers}>Dealer Network</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageLocation}>Location</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageContactUs}>Contact Us</a>
              </li>
            </ul>
          
          </div>
        </nav>

        <main>
          {this.state.pageshown}
        </main>
        
        <footer class="page-footer font-small bg-dark text-light">
          <div class="footer-copyright text-center py-3">{year} Copyright:&nbsp;
            <a class="text-white" href="/">&copy; TheCompany</a>
          </div>
        </footer>
      
      </div>
      
    );
  }
}

export default App;
