import { Switch, Route } from 'react-router-dom';

import { Layout } from '../Layout';
import { Header } from '../Header';
import { NotFound } from '../NotFound';

const Router = () => {
  return (
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/profile" component={Header}/>
        <Route exact path="/chat/:chatId" component={Layout}/>
        {/*<Route exact path="/profile" >*/}
        {/*  <Layout prop1={} prop2={}/>*/}
        {/*</Route>*/}
        {/*<Route exact path="/chats" />*/}
        <Route component={NotFound}/>
      </Switch>
  )
};

export { Router };
