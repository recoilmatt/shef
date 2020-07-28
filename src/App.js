import React, { useState, useEffect } from "react";

import Recipes from "./Components/Recipes";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import "./App.css";


const App = () => {
  const APP_ID = "8c388d49";
  const APP_KEY = "187275dc0fccc64911d868fb49476e03";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("matcha"); //when button is clicked, it sets the query here.

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search); //sets the search box state as the query.
    setSearch("");
  };

  return (
    <div className="App">
      <div className="outer-col-2">
        <Search 
         getSearch={getSearch}
         search={search}
         updateSearch={updateSearch}/>

        <div className="inner-row">
          <div className="inner-col">
           
           <Recipes
          recipes={recipes}/>

          <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
