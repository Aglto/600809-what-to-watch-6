import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {APIRoute, AuthorizationStatus} from '../../const';

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={APIRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps, null)(PrivateRoute);
