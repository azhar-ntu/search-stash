import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Not Found!</h1>
      <br />
      <Link to="/">
        <button>Go Home!</button>
      </Link>
      <br />
      <img
        src="https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif"
        alt="There's nothing here"
      />
    </div>
  );
};

export default NotFoundPage;
