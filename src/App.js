import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shopPage/ShopPage";
import Header from "./components/header/header";
import Onboarding from "./pages/onbording/onboarding";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

function App({ setCurrentUser, currentUser }) {
  let unsubscribeFromAuth;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          let userObj = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setCurrentUser(userObj);
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      console.log("cleanup");
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/login"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <Onboarding />;
          }}
        />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
