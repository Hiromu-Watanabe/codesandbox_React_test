import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color
  };

  return <h1 style={contentStyle}>{children}</h1>;
};

export default ColorfulMessage;
