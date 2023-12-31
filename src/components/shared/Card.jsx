import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //return <div className={`card ${reverse && `reverse`}`}>{children}</div>;
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#ffff",
        color: reverse ? "#fff" : "#000000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: true,
};
Card.prototype = {
  children: PropTypes.node.isRequired,
};
export default Card;
