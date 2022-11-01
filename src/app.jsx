import React from 'react';
// import { Component } from 'react';
import "./index.css";
import Profile from "./components/profile"
import Links from "./components/links";
import Icon from "./components/icon"
import SocialIcon from './components/social';
import Footer from './components/footer';

function App() {
  return(
    <div>
      <Profile />
      
      <Icon />

      <div className='link'>
        <Links
          id="twitter_link"
          url="https://twitter.com/paulagbelex"
          linkName="twitter link"
        />

        <Links
          id="btn__zuri"
          url="https://training.zuri.team/"
          linkName="zuri team"
           />
      
          <Links
          id="books"
          url=" http://books.zuri.team"
          linkName="zuri books"
          />
    
        <Links
            id="book__python"
              url= "https://books.zuri.team/python-for-beginners?ref_id=<paulagbelex>"
              linkName="python books"
          />

        <Links
          id="pitch"
            url= "https://background.zuri.team"
            linkName="background check for coders"
          />
        <Links
          id="book__design"
            url= "https://books.zuri.team/design-rules"
            linkName="design books"
        /></div>
      
      <SocialIcon />
      
      <Footer />

</div>
    
  )
}

export default App;