import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '@/components/header';
import NotFound from '@/components/not_found';
import Home from '@/containers/home';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  global: PropTypes.object,
};

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route render={RouterProps => <Header router={RouterProps} />} />
          <main id="container">
            <Switch>
              <Route
                exact
                path="/"
                render={RouterProps => <Home {...this.props} router={RouterProps} />}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
