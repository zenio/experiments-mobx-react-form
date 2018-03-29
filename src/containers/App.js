import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import CompanyContainer from './Company/CompanyContainer';
import CompanyListContainer from './Company/CompanyListContainer';
import CompanyEditor from './Company/CompanyEditor';

@inject('companyStore')
@withRouter
@observer
class App extends Component {
  componentWillMount() {
    this.props.companyStore.loadCompanyList();  
  }

  render() {
    const routes = (
      <Switch>
        <Route path="/company/edit/:id" component={CompanyEditor} />
        <Route path="/company/:id" component={CompanyContainer} />
        <Route path="/" exact component={CompanyListContainer} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
