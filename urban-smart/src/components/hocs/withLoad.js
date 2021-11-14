import React from "react";
import Spinner from "../spinner";

const withLoad = (Component) => (props) => {
  const { loadStatus } = props;
  return (
    !loadStatus ? <Spinner /> : <Component {...props} />
  );
};

export default withLoad;
