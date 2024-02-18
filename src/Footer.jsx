import React from "react";

const Footer = ({ length }) => {
  return (
    <footer className="footer">
      Total- {length} - {length === 1 ? "item" : "items"}{" "}
    </footer>
  );
};

export default Footer;
