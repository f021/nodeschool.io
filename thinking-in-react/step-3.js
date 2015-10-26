//  Step 2 : Build static version in React - part 2
//  Exercise 3 of 7


// # Exercise

// Good job! Now, let's add the SearchBar.

// # HINT(s)

//   * Continue building on the solution from the previous step.
//   * Remember to export both components so that I can verify them.

//     export const FilterableProductTable...
//     export const SearchBar...

    import React from 'react'

    export const SearchBar = React.createClass({
    	render() {
    		return (
    				<form>
    					<input type="search" placeholder="Search..."></input>
    					<label>
    						<input type="checkbox"></input>
    						Only show products in stock
    					</label>
    				</form>
    			)
    	}
    });
    
    export const FilterableProductTable = React.createClass({
        render() {
            return (
                <SearchBar/>
            );
        }
    });