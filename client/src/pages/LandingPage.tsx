import React from 'react';
import "./LandingPage.css";
import { Header } from "./../components/simple/Header/Header"
import { SearchBox } from './../components/simple/SearchBox/SearchBox';

type TLandingPageProps = {
    
}

export const LandingPage = (props: TLandingPageProps) => {
  return (
    <div className="DocuFind">
      <div className="DocuFind__header">
        <Header 
          text="DocuFIND"
          tagline="find the documentary for you"
        />
      </div>
      <div className="DocuFind__searchBox">
        <SearchBox />
      </div>
    </div>
  )
}