import React, { useEffect, useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import PostPage from "./pages/PostPage";
import PageErrorBoundary from "./components/PageErrorBoundary";
import Example from "./pages/AddPost";
export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <PageErrorBoundary>
            <Home />
          </PageErrorBoundary>
        </Route>
        <Route exact path="/posts/:id">
          <PageErrorBoundary>
            <PostPage />
          </PageErrorBoundary>
        </Route>

        <Route path="/authors">
          <PageErrorBoundary>
            <Authors />
          </PageErrorBoundary>
        </Route>
        <Route path="/addpost">
          <PageErrorBoundary>
            <Example />
          </PageErrorBoundary>
        </Route>
      </Switch>
    </>
  );
}
