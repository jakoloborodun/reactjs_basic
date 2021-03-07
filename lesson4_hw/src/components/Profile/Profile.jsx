import React from "react";
import { Header } from "../Header";

import './Profile.css';

const Profile = () => {
    return (
        <div className='layout'>
          <Header className="header" title={ 'Profile' }/>
          <div className='profile'>
              <h1>Hello from Profile</h1>
          </div>
        </div>
    );
};

export { Profile };
