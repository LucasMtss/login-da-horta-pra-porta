import { Switch } from 'react-router-dom';

import { SignIn } from 'pages/Auth/SignIn';

import { HomePage } from 'pages/App/HomePage';
import { Route } from './Route';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/home" isPrivate component={HomePage} />
  </Switch>
);
