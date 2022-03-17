import React, { useContext } from "react";
import ProductList from "./ProductList";
import { ThemeContext } from "./ThemProvider";

function Home(props) {
  const valueTheme = useContext(ThemeContext);

  return (
    <div>
      <ProductList />
      <button onClick={valueTheme.handleClick}>Toggle Theme</button>
    </div>
  );
}

export default Home;
