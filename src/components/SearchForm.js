import React from 'react';
import '../css/search-form.css';

function SearchForm() {
	return (
		<form className="search_form" method="get" action="#">
			<input type="text" placeholder="Search and Find" name="search_box" />
			<input type="submit" value="" />

			<button type="button" className="add_btn">
				+ Add
			</button>
		</form>
	);
}

export default SearchForm;
