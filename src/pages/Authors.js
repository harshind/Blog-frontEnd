import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { NavLink, Switch, Route } from "react-router-dom";
import Author from "../components/Author";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const { path, url } = useRouteMatch();

  useEffect(() => {
    fetch("https://obscure-fjord-59024.herokuapp.com/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data.authors));
  }, []);

  return (
    <>
      <ul>
        {authors.map((author, index) => {
          return (
            <li>
              <NavLink to={`${url}/${author._id}`}>{author.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route path={`${path}/:authorId`}>
          <Author />
        </Route>
      </Switch>
    </>
  );
};

export default Authors;
