import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../Layout';
import { Profile } from "../Profile";
import { NotFound } from '../NotFound';

const Router = () => {
  return (
      <Switch>
        <Route exact path="/" render={ () =>
            <Layout chatId={ 1 }/> }/>
        <Route exact path="/profile" component={ Profile }/>
        <Route exact path="/chat/:chatId" component={ Layout }/>
        <Route component={ NotFound }/>
      </Switch>
  )
};

export { Router };
