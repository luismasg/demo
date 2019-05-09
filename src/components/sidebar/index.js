import React from "react";
import { Link, withRouter } from "react-router-dom";

function Sidebar(props) {
  return (
    <ul className="list-group">
      {props.users.map(user => {
        return (
          // <Link
          //   className={`list-group-item ${
          //     user.id === Number(props.match.params.user) ? "active" : ""
          //   }`}
          //   key={user.username}
          //   to={`/${user.id}`}
          // >
          //   {user.name}
          // </Link>
          <a
            href={`/${user.id}`}
            className={`list-group-item ${
              user.username === props.match.params.user ? "active" : ""
            }`}
            key={user.username}
          >
            {user.name}
          </a>
        );
      })}
    </ul>
  );
}

export default withRouter(Sidebar);
