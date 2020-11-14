import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const HomeLayout = props =>{
  return(
      <Fragment>
        <Header />
        {props.children}
        <Footer />

      </Fragment>
  )
}
const HomeTemplate = ({Component, ...props}) => {
  return(
    <div>
      <Route {...props}
        render = { propsComponent =>
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        }
      />
    </div>
  );
};
export default HomeTemplate;