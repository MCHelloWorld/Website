import React from "react";

const ErrorMessage = props => {
  function displayLinks() {
    if (props.links)
      return (
        <div className="card-action">
          {props.links.map((obj, i) => (
            <a key={i} href={obj.href}>
              {obj.content}
            </a>
          ))}
        </div>
      );
    else {
    }
  }

  if (props.display === false) return null;

  return (
    <div className="col s12 m6">
      <div className="card red darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.error}</span>
          <p>{props.desc}</p>
        </div>
        {displayLinks()}
      </div>
    </div>
  );
};

export default ErrorMessage;
