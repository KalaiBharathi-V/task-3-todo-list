import React from "react";

function Header() {
  return (
    <header>
      <h1>To do list</h1>
    </header>
  );
}

Header.defaultProps = {
  title: "Todo List",
};

export default Header;
