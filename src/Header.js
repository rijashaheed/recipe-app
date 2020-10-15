import React from "react";
import "./App.scss";
import "./_components.scss";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const Search = () => {
	return (
		<div>
			<div class="search">
				<input type="text" class="search__input" placeholder="Search recipes" />
				<button class="search__button">
					<SearchIcon className="search__icon" style={{ fontSize: "2.5rem" }} />
				</button>
			</div>
		</div>
	);
};

const Logo = () => {
	return (
		<div className="logo">
			<FastfoodIcon classname="logo__icon" style={{ fontSize: "4rem" }} />
			<h2 className="logo__head">Get the recipe</h2>
		</div>
	);
};

const Header = () => {
	return (
		<div classname="header-wrapper">
			<div className="header">
				<Logo />
				<Search />
				<FavoriteIcon className="favorites" style={{ fontSize: "4rem" }} />
			</div>
		</div>
	);
};

export default Header;

// {/* <input type="text" placeholder="Search Recipes" ></input> */}
