import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Top } from './Top'
import { Detail } from './Detail'

export const App = () => {
  return(
    <div className="App">
      <Switch>
        <Route path='/movies/:id' component={Detail} />
        <Route path='/' component={Top} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}
