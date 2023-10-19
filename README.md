# Welcome to Horror House of Cinema!
![Welcome to Horror House of Cinema!](https://media2.giphy.com/media/vPsOppq7dmsuc/200.gif)

## Prerequisites

Before using the Horror House of Cinema Shop, ensure that you have npm installed and use:

    npm install

## Getting Started

    Clone the project repository to your local machine.
    Navigate to the project directory in your terminal.

## Usage

Below are the available commands and their descriptions.
Command Syntax

node index.js <command> [arguments]

Available Commands

```
Create a New Movie
    Command: create
    Description: Adds a new movie to the inventory.
    Example: node index.js create

List All Movies
    Command: list
    Description: Lists all movies in the inventory.
    Example: node index.js list

Update a Movie
    Command: update
    Description: Updates an existing movie in the inventory.
    Example: node index.js update <movie_id> <name> <genre> <price_in_cents> <in_stock>

Get Movie by ID
    Command: get
    Description: Retrieves a movie by its unique ID.
    Example: node index.js get <movie_id>

Delete a Movie by ID
    Command: delete
    Description: Deletes a movie from the inventory by its ID.
    Example: node index.js delete <movie_id>

Add a Movie to the Cart
    Command: addcart
    Description: Adds a movie to the shopping cart.
    Example: node index.js addcart <movie_id> <quantity>

List Items in the Cart
    Command: listcart
    Description: Lists all items in the shopping cart.
    Example: node index.js listcart

Cancel an Order (Empty the Cart)
    Command: cancel
    Description: Cancels the current shopping cart order.
    Example: node index.js cancel

Calculate Cart Total
    Command: calculate
    Description: Calculates the total cost of the items in the cart.
    Example: node index.js calculate <movie_id>
```

### Examples:

Adding a new movie:

    node index.js create

### Listing all movies:

    node index.js list

### Updating a movie:

    node index.js update <name> <genre> <priceInCents>  <in_stock>

### Retrieving a movie by ID:

    node index.js get <movie_id>

### Deleting a movie by ID:

    node index.js delete <movie_id>

### Adding a movie to the cart:

    node index.js addcart <movie_id> <quantity>

### Listing items in the cart:

    node index.js listcart

### Canceling the current order (emptying the cart):

    node index.js cancel

### Calculating the total cost of items in the cart:

    node index.js calculate <movie_id>
