import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container-about">
      <div>
      <div variant="text" color="text.secondary" component="div">
            An app built around the Discogs system- giving access to bin diggers on the go.
          </div>
        <p>
          RecordBin was built during a two week sprint using the below technologies. 
          <br/>
              * React - Redux - React Sagas * 
          <br/>
              * PostgreSQL - Node.js - Express.js *
          <br/>
              * Material UI - Discogs API * 
          <br/>
        </p>
        <p>
            What's next?
            <br/>
            Search functionality for wishlist and collection.
            <br/> 
            Full Discogs profile integration.
            <br/>
        </p>
        <p>
            Special thanks to:
            <br/>
            Prime Digital Academy
            <br/>
            Gaiman Cohort
            <br/>
            My Friends and Family
            <br/>
        </p>

      </div>
    </div>
  );
}

export default AboutPage;
