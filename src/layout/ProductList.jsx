import React, { useContext } from "react";
import { ThemeContext } from "./ThemProvider";
import "./style.css";

function ProductList(props) {
  const valueTheme = useContext(ThemeContext);

  return (
    <div>
      <h3 className={valueTheme.theme}>
        An async function is a function declared with the async keyword, and the
        await keyword is permitted within it. The async and await keywords
        enable asynchronous, promise-based behavior to be written in a cleaner
        style, avoiding the need to explicitly configure promise chains.
      </h3>
    </div>
  );
}

export default ProductList;
