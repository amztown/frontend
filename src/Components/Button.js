import react from "react";
const Button = ({ text, color }) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: "#6DC9B4",
        width: "127px",
        height: "47px",
        color: `${color ? color : "black"}`,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
