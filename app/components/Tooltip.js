import React from "react";
import PropTypes from "prop-types";
import Hover from "./Hover";

const styles = {
  container: {
    position: "relative",
    display: "flex"
  },
  tooltip: {
    boxsizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadious: "3px",
    backgroundColor: "hsla(0,0%,20%,0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px"
  }
};

export default function Tooltip({ text, children }) {
  return (
    <Hover>
      {hovering => (
        <div style={styles.container}>
          <pre> hello hello{hovering}</pre>
          {hovering === true && <div style={styles.tooltip}>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  );
}

Tooltip.prototypes = {
  text: PropTypes.string.isRequired
};
