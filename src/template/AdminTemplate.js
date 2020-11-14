import React, { Fragment } from 'react';
import { Route } from "react-router-dom";

const AdminLayout = props => {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}
const AdminTemplate = ({Component, ...props}) => {
  return (
    <div>
      <Route
        {...props}
        render = { propsComponent =>
          <AdminLayout>
            <Component {...propsComponent} />
          </AdminLayout>
        }
      />
    </div>
  );
};

export default AdminTemplate;