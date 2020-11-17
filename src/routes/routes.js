import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'
import RecoverPassword from '../pages/RecoverPassword'


function Routes (){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SingIn} />
        <Route path="/singup" component={SingUp} />
        <Route path="/recover-password" component={RecoverPassword} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;