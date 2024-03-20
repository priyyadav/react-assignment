import PropTypes from "prop-types";
import { UserCircle } from "@phosphor-icons/react";

function Button({ label, size, displayType, type, status, handleClick }) {
  const scale = size === "small" ? 0.75 : size === "xs" ? 0.55 : 1; 

  let backgroundColorStyle;
  switch (status) {
    case "hover":
      backgroundColorStyle = type === "default" ? "#EDFAED" :type === "neutral" ? "#F2F3F5": "#282829";
      break;
    case "disable":
      backgroundColorStyle = type === "default" ? "#EDFAED" : type === "neutral" ? "#F2F3F5":"#282829";
      break;
    default:
      backgroundColorStyle = type === "default" ? "transparent" :type === "neutral" ? "transparent ":"black";
      break;
  }

  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    cursor: status !== "disable" ? "pointer" : "not-allowed",
    fontSize: size === "small" ? "24px" : size === "default" ? "28px" : "22px",
    color: type === "default" ? "green" : type === "neutral" ? "black" : "white",
    backgroundColor: backgroundColorStyle,
    ...(status === "disable" ? { opacity: "0.3" } : {}), 
  };

  const iconSize = {
    width: size === "small" ? "24px" : size === "default" ? "28px" : "22px",
    height: size === "small" ? "24px" : size === "default" ? "28px" : "22px",
  };

  return (
    <button onClick={handleClick} style={style}>
      {displayType !== "icon-only" && <span>{label}</span>}
      {(displayType === "icon-with-text" || displayType === "icon-only") && (
        <UserCircle width={iconSize.width} height={iconSize.height} />
      )}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["default", "small", "xs"]), 
  displayType: PropTypes.oneOf(["text-only", "icon-with-text", "icon-only"]),
  type: PropTypes.oneOf(["default", "neutral", "reverse"]),
  status: PropTypes.oneOf(["default", "hover", "disable"]),
  handleClick: PropTypes.func,
};


export default Button;
