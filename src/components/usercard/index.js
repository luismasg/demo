import React from "react";

import { withRouter } from "react-router-dom";
const userCard = props =>
  props.user ? (
    <div className="card person" style={{ width: "18rem" }}>
      <img
        className="img-fluid"
        src={`https://picsum.photos/300/200?id=${Math.random()}`}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{props.user && props.user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          @{props.user && props.user.username}
        </h6>
        <p className="card-text">
          {props.user && props.user.company.catchPhrase}
        </p>
        <a
          className="card-link"
          href={
            props.user ? `http://www.${props.user.website}` : "www.google.com"
          }
        >
          {props.user && props.user.website}
        </a>
        <a
          className="card-link"
          href={`mailto:  ${
            props.user ? props.user.email : "example@example.com"
          }`}
        >
          Email
        </a>
      </div>
    </div>
  ) : null;

export default withRouter(userCard);
